const fibonacci = (nombre) => {
	const tableau = [0, 1];
	if (nombre > 1) {
		// nombre 2 doit retourner [0, 1, 1]
		// const nombre1 = tableau[1]
		// const nombre2 = tableau[0]
		// tableau.push(nombre1 + nombre2)

		for (let i = 2; i < nombre; i++) {
			const nombreIndexMin1 = tableau[i - 1];
			const nombreIndexMin2 = tableau[i - 2];

			tableau.push(nombreIndexMin1 + nombreIndexMin2);
		}
	}
	return tableau;
};

console.log("fibonacci of 1:", fibonacci(1));
console.log("fibonacci of 10:", fibonacci(10));
console.log(fibonacci(14));
// console.log('fibonacci of 100:', fibonacci(100))

// 0 1 1 2 3 5 8 13
// fibonacci(1) = [0, 1]
// fibonacci(5) = [0, 1, 1, 2, 3]

// c'est une suite à partir de 0 puis 1 qui additionne les deux derniers nombres
// n = (n-1) + (n-2)

const fibonacci2 = (length) => {
	if (length <= 0) {
		console.error("Length must be greater than 0");
		return [];
	}

	const fibSequence = [0, 1];
	if (length <= 2) {
		return fibSequence.slice(0, length - 1);
	}

	for (let i = 2; i < length; i++) {
		fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
	}

	return fibSequence;
};
