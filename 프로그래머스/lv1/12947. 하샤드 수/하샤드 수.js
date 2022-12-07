function solution(x) {
    const sum = x.toString().split('').reduce((acc,value) => {
        return acc+Number(value)
    }, 0);
    return x%sum===0;
}