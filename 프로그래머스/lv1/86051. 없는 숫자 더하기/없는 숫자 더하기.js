function solution(numbers) {
    const sum = numbers.reduce((acc,value) => acc +value, 0);
    return 45-sum;
}