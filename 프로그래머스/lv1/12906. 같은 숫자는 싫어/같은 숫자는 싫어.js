function solution(arr)
{
    var answer = [];

    let lastValue = null;
    arr.forEach((v) => {
        if(v === lastValue) {
        } else {
            answer.push(v);
            lastValue = v;
        }
    })
    return answer;
}