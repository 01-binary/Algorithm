function solution(n) {
    const repeatedString = '수박';
    
    return n%2===0 ? repeatedString.repeat(n/2) : repeatedString.repeat(n/2)+'수';
}