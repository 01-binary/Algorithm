function solution(n) {
    let str = ''
    while(n >= 3) {
        const head = n/3; //15
        const rest = n%3; // 0
        str = Math.floor(rest) + str;
        n = head;
    }
    str = Math.floor(n) + str;
    const num = str.split('').reduce((arr,num, i) => arr += parseInt(num)*(3**(i)), 0);
    return num;
}