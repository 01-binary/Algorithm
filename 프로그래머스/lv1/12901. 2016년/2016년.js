const arr = [0,31,29,31,30, 31,30,31,31,30,31,30,31];
const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function solution(a, b) {
    let sum = 0;
    for(let i=0;i<a;i++) {
        sum += arr[i];
    }
    let temp = (sum + b)%7 -3;
    if(temp < 0) {
        temp += 7;
    }
    return day[temp];
}