n = int(input("enter size of array: "))
arr = list(map(int, input("enter elements separated by comma: ").split(",")))

if len(arr) != n:
    print("error")
else:
    print("arry: ", arr)