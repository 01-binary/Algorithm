function solution(n) {
    const number = Math.sqrt(n);
    if(Number.isInteger(number)) {
        return (number+1)**2
    } else {
        return -1;
    }
}