def max_average_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
        
    return max_sum / k 
arr = [1,12,-5,-6,50,3]
k = 4
result = max_average_subarray(arr, k)
print(result)