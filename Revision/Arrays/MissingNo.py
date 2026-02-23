arr = [1,2,4,5]
n = len(arr) + 1
total_sum = n * (n + 1) // 2
actual_sum = 0

for num in arr:
    actual_sum = actual_sum + num
missing = total_sum - actual_sum
print(missing)