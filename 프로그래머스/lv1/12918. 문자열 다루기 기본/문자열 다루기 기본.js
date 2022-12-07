function solution(s) {
    if (s.includes('e') || isNaN(s)) return false;
    return (s.length === 4 || s.length === 6) ? true : false;
}