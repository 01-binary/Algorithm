function solution(lottos, win_nums) {
    var answer = [];
    lottos.forEach((e,i) => {
        let correctIndex = win_nums.findIndex((win_e) => e===win_e);
        if(correctIndex !== -1) {
            lottos[i] = -1;
            win_nums[correctIndex] = -1;
        }
    })
    //7 - 맞는 갯수 : 등수 <6는 무조건 6
    const min = lottos.filter((e) => e===-1).length;
    const max = lottos.filter((e) => e===0).length + min;
    
    7-max >= 7 ? answer.push(6) : answer.push(7-max);
    7-min >= 7 ? answer.push(6) : answer.push(7-min);
    
    return answer;
}