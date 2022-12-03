function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter((value) => value % divisor === 0);
    
    return !answer.length ? [-1] : answer.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
}