function solution(a, b) {
    if(a===b) return a;
    var answer = 0;
    
    let arr = [a,b];
    arr = arr.sort((a,b) => a-b);
    
    for(let i = arr[0]; i<=arr[1]; i++) {
        answer += i;
    }
    return answer;
}