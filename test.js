let pow = (n, x) => {
	let sum = 0
	for (let i=0;i < x;i++) {
		sum += n * n
	}
	return sum
}

console.log(`googol is 10^100, googol = ${pow(10, 100)}`)
