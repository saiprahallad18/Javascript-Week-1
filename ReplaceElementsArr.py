# arr = [20,15,26,2,98,6]
def replaceWithRank(arr):
    rank_map = {}
    rank  = 1
    for num in sorted(arr):
        if num not in rank_map:
            rank_map[num] = rank
            rank += 1
    return[rank_map[num] for num in arr]
n = int(input("enter size of array: ").strip())
arr = list(map(int, input("enter elements: ").split()))
result = replaceWithRank(arr)
print(*result)
# * is to unzip the list