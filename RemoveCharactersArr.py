def removeChars(str1, str2):
    remove_set = set(str2)
    result = []
    for ch in str1:
        if ch not in remove_set:
            result.append(ch)
    return"".join(result)
str1 = input("enter char: ").strip()
str2 = input("enter char: ").strip()
print(removeChars(str1, str2)) 