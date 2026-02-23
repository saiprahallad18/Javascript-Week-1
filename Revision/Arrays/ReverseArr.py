def reverse_array(arr):
    reverse_array = []
    
    for i in range(len(arr) -1, -1, -1):
        reverse_array.append(arr[i])
    return reverse_array
arr = [1,2,3,4,5]
print(reverse_array(arr))