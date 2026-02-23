arr = [1,2,2,4,5,5]
repeated = 1

count = 0

for num in arr:
    if num == repeated:
        count = count + 1
print(count)