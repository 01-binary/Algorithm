function solution(arr) {
    const min = Math.min(...arr);
    answer = arr.filter((v) => v !== min)
    return answer.length > 0 ? answer : [-1];
}