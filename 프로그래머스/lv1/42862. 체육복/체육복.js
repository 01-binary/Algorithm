function solution(n, lost, reserve) {
    let answer = 0;

    lost.sort((a, b) => (a - b));
    reserve.sort((a, b) => (a - b));
    
        reserve.forEach((eli, i) => {
        let lostIndex = lost.findIndex(losEli => losEli === (eli));
        if(lostIndex !== -1) {
            lost[lostIndex] = -1;
            reserve[i]= -1;
            return;
        }
    })
    
    reserve.forEach((eli, i) => {
        if(eli === -1) return;
        let lostIndex = lost.findIndex(losEli => losEli === (eli-1) || losEli === (eli+1));
        if(lostIndex !== -1) {
            lost[lostIndex] = -1;
            reserve[i]= -1;
            return;
        }
        
        if(lostIndex !== -1) {
            lost[lostIndex] = -1;
        }
    })
    
    const temp = lost.filter((e) => e !== -1)
    answer = n - temp.length;
    return answer;
}