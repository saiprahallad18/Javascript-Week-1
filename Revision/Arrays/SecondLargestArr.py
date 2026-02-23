numbers = [30,10,45,5,20]
numbers.sort(reverse=True)
if len(numbers) >= 2:
    second_largest = numbers[1]
    print("the second largest number in the list is:" ,second_largest)
else:
    print("The list doesn't contain a second largest num.")
    
