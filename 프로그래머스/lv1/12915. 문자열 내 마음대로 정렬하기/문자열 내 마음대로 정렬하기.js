function solution(strings, n) {
    return strings.sort((first,second) => {
        if(first.charCodeAt(n) !== second.charCodeAt(n)) {
            return first.charCodeAt(n) - second.charCodeAt(n)        
        } else {
            return second > first ? -1 : 1;
        }
    })
}