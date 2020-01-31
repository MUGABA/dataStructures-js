def swap(arr,i,j):
	[arr[i],arr[j]] = [arr[j],arr[i]]

def bubbleSort(arr):
	i=len(arr)
	while i>0:
		noSwap = True
		for j in range(i-1):
			if arr[j] > arr[j+1]:
				swap(arr,j,j+1)
				print(arr)
				noSwap = False

		i-=1
	return arr

print(bubbleSort([9, 1, 2, 3, 4, 5]))
