function solution(a, b, n) {
    let total = 0;

    while (n >= a) {
        let quotient = Math.floor(n / a);
        let remainder = n % a;
        
        total += quotient * b;
        n = quotient * b + remainder;
    }

    return total;
}