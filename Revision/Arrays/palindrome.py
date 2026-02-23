n = input("enter a value: ")
if(n == n[::-1]):
    print(f"{n} is a palindrome")
else:
    print(f"it's not a palindrome")