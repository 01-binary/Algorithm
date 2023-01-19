function solution(n, arr1, arr2) {
    const answer = [];
    for(let i =0; i<n;i++) {
        const a =arr1[i].toString(2).padStart(n, '0').split('')
        const b =arr2[i].toString(2).padStart(n, '0').split('')
        let str = '';
        for(let j =0; j<n;j++) {
            if(a[j] === '0' && b[j] === '0') {
                str += ' ';
            } else {
                str += '#';
            }
        }
        answer.push(str);
    }
    return answer;
}