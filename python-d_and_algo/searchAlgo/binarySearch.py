import math
def binarySearch(sortedArray, item):
	length = len(sortedArray)
	start = 0
	last = length-1
	middle = math.floor((start + last)/2)

	for i in range(length):
		if sortedArray[middle] != item and start <= last:
			if item < sortedArray[middle]:
				last = middle-1
			elif item > sortedArray[middle]:
				start = middle + 1

			middle = math.floor((start + last)/2)

		if sortedArray[middle] == item:
			return middle

	return -1

print(binarySearch([1, 2, 4, 7, 9, 10, 12, 14, 16, 18, 22, 24], 22))




