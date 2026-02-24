def findNonRepeating(arr):
    freq ={}
    for num in arr:
        freq[num] = freq.get(num, 0) + 1
    result = []
    for num in arr:
        if freq[num] == 1:
            result.append(num)
    return result
n = int(input("enter size of arr: ").strip())
arr = list(map(int, input("enter nums: ").split()))    
result = findNonRepeating(arr)
if result:
    print(*result)
else:
    print(-1)