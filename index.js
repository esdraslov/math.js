export.pi = 3.14159265

export.pow = (n, x) => {
	let sum = 0
	for (let i=0;i < x;i++) {
		sum += n * n
	}
	return sum
}
