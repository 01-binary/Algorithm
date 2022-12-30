const gcb = (m,n) => {
    if(n === 0) return m;
    return gcb(n, m%n);
}
function solution(n, m) {
    var answer = [];
    
    const a = gcb(m,n);
    answer.push(a, m*n/a);
    
    return answer;
}