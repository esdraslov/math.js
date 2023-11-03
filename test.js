let pow = (n, x) => {
	let sum = 0
	for (let i=0;i < x;i++) {
		sum += n * n
	}
	return sum
}
factorial = (n) => {
	if (n = 0) {
		return 1
	}
	return n * this.factorial(n - 1)
}

console.log(`googol is 10^100, googol = ${pow(10, 100)}`)
console.log(`9! = ${factorial(9)}`)
