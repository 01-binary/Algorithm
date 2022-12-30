function solution(s) {
    const strArr = s.split(' ');
    return strArr.map(str => str.split('').reduce((arr, v, i) => {
        const char = i%2 === 0 ? v.toUpperCase() : v.toLowerCase();
        return arr += char;
    }, '')).join(' ');
}