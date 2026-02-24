def longest_mountain(arr):
    n = len(arr)
    max_length = 0
    
    for i in range(1, n-1):
        # checking if arr[i] is a peak
        if arr[i] > arr[i - 1] and arr[i + 1]:
            left = i
            right = i
            
            # Moving to the left-side
            while left > 0 and arr[left] > arr[left - 1]:
                left -= 1
                
            # Moving to the right side
            while right < n-1 and arr[right] > arr[right + 1]:
                right +=  1
                
            length = right - left + 1
            max_length = max(max_length, length)
    
    return max_length
arr =[2,1,4,7,3,2,5]
result = longest_mountain(arr)
print(result)