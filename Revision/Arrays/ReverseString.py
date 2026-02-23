# a = input("enter a string: ")
# print(a[::-1])

name = "hello"

reversed_string = ""
for i in range(len(name) - 1, -1, -1):
    reversed_string = reversed_string + name[i]

print(reversed_string)