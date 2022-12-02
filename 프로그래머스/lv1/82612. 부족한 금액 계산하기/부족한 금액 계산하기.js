function solution(price, money, count) {
    var answer = -1;
    
    let i = 1;
    let sum =0;
    while(i<=count) {
        sum +=price*i;
        i++;
    }
    return money-sum <= 0 ? sum-money : 0;
}