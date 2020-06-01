// ALGORITHM
function fibonacci(value) {
	let sequence = [0, 1]; // value > 2

	if (value >= 0 && value < 2) {
		sequence = [0];
	} else {
		// value > 2
		for (let i = 2; i < value; i++) {
			sequence[i] = sequence[i - 1] + sequence[i - 2]; // push sum
		}
	}
	return sequence;
}
