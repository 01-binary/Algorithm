function solution(arr1, arr2) {
    const rowLen = arr1.length;
    const colLen = arr1[0].length;
    const answer = [];
    for(let i = 0; i< rowLen; i++){
        const rowArr= [];
        for(let j = 0; j< colLen; j++){
            rowArr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(rowArr);
    }
    return answer;
}