function solution(left, right) {
    var answer = 0;
    const plus = [];
    const minus = [];
    for(let i=left;i<=right;i++) {
        let cnt = 0;
        for(let j=1; j<=i; j++) {
            if(i % j === 0) {
                cnt++;
            }
        }
        if(cnt % 2 === 0) {
            plus.push(i);
        } else {
            minus.push(i);
        }
    }
    console.log(plus);
    const plus_sum = plus.reduce((acc, v) => acc+v,0)
    const minus_sum = minus.reduce((acc, v) => acc+v,0)

    return plus_sum - minus_sum;
}