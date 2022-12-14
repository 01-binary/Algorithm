function solution(n)
{
    let answer = 0;
    
    return n.toString().split('').reduce((acc, v) => {
        return acc + Number(v);
    }, answer)
}