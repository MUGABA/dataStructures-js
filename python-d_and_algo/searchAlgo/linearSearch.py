def linearSeach(array, item):
	if not array or not item:
		return

	for i in range(len(array)):
		if array[i] == item:
			return 1
	return -1


print(linearSeach([1, 99, 45, 3, 7], 8))