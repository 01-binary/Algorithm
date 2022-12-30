function solution(n) {
    const answer = 0;
    const numArr = n.toString().split('').map((v) => parseInt(v)).sort((a,b) => b-a).reduce((arr, v) => {
        return arr += v;
    },'')
    return parseInt(numArr);
}