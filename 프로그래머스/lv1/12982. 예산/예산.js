function solution(d, budget) {
    const sorted = d.sort((a,b) => a-b);
    let answer = 0;
    let sum = 0;
    
    for(let i = 0;i<sorted.length;i++) {
        sum += sorted[i];
        if(sum > budget) break;
        answer++;   
    }

    return answer;
}