from __future__ import print_function
import numpy as np
import cv2

def consecutive(data, stepsize=1):
    return np.split(data, np.where(np.diff(data) != stepsize)[0]+1)

def clamp(img, pix=20, ratio=1/2):
    '''
    Input:
        image in (HxWxC)
        pix, value for background
    Return:
        right most pixel coord
        left most pixel coord
        image, with black sides clamped
    '''
    h, w, _ = img.shape
    if w < 1300:
        return w, 0, img
    tmp = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    tmp[tmp<pix] = 0
    black_cnt = h - np.count_nonzero(tmp, axis=0)

    vertical = np.where(black_cnt >= h * ratio)[0]
    if len(vertical) == 0:
        return w, 0, img
    vertical_group = [x for x in consecutive(vertical) if (len(x) > 20)]
    if len(vertical_group) == 0:
        return w, 0, img
    elif len(vertical_group) == 1:
        if vertical_group[0][0] == 0:
            r, l = (w, vertical_group[0][-1])
        elif vertical_group[0][-1] == w-1:
            r, l = (vertical_group[0][0], 0)
        else:
            r, l = w, 0
    elif len(vertical_group) >= 2:
        if vertical_group[-1][-1] == w - 1 and vertical_group[0][0] == 0:
            r, l = (min(vertical_group[-1]), max(vertical_group[0]))
        else:
            r, l = w, 0
    else:
        r, l = w, 0

    if r - l + 1 <= 1000:
        return w, 0, img

    return r, l, img[:,l:r,:]

if __name__ == "__main__":
    import sys, time
    from cvtools import cv_load_image
    img = cv_load_image(sys.argv[1])
    st = time.time()
    r, l, o = clamp(img, pix=40, ratio=5/6)
    print(r, l, o.shape, time.time() - st)
    cv2.imshow("clamped", o)
    cv2.imshow("orig", img)
    cv2.waitKey()
