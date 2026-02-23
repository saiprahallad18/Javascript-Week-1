def minimun_difference(arr):
    min_diff = abs(arr[0] - arr[1])
        
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            diff = abs(arr[i] - arr[j])
            if diff < min_diff:
                min_diff = diff
    return min_diff
result = minimun_difference([4,2,6,8])
print(result)