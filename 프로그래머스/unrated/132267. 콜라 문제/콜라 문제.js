const solution = (a, b, n) => {
	if (n < a) {
		return 0;
	}

	const 몫 = Math.floor(n / a);
	const 나머지 = n % a;

	return 몫 * b + solution(a, b, (몫 * b) + 나머지)
}