function solution(n) {
    var answer = [];
    let number = n;
    while(number> 10) {
        const n1 = number / 10;
        const n2 = number % 10;
        
        number = Math.floor(n1);
        answer.push(Math.floor(n2));
    }
    answer.push(number);
    
    return answer;
}