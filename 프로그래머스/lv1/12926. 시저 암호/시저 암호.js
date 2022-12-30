function solution(s, n) {
    var answer = '';
    return s.split('').map(v => {
        if(v.charCodeAt() === 32) return ' ';
        
        if(v.charCodeAt() >= 65 && v.charCodeAt() <= 90) {
            if(v.charCodeAt() + n > 90) {
                return String.fromCharCode(v.charCodeAt() + n - 26);
            } else {
                return String.fromCharCode(v.charCodeAt() + n);
            }
        }
        
        if(v.charCodeAt() >= 97 && v.charCodeAt() <= 122) {
            if(v.charCodeAt() + n > 122) {
                return String.fromCharCode(v.charCodeAt() + n - 26);
            } else {
                return String.fromCharCode(v.charCodeAt() + n);
            }
        }
    }).join('');
    return answer;
}