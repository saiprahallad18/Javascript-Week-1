n = int(input("enter size of array: "))
arr = list(map(int, input("elements separated by space: ").split()))

if len(arr) != n:
    print("error")
else:
    print("Array", arr)
