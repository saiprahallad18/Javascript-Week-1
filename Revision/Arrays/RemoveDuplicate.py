arr = [1, 2, 2, 3, 4, 4]

new_list = []

for num in arr:
    if num not in new_list:
        new_list.append(num)
print(new_list)