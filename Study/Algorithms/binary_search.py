from random import randint
import numpy as np
N = 10
lst = []
for i in range(N):
    lst.append(randint(0, 100))
print(lst)
lst.sort()
arr = np.array(lst)
print(arr)

