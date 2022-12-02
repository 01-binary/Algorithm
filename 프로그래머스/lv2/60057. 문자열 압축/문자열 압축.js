let answer = 1001;

const recursive = (searchTerm, target, cnt, arr) => {
    if(target.length < searchTerm.length || !target) {
        if(cnt === 1) {
            arr.push(searchTerm);
        } else {
            arr.push(cnt+searchTerm);
        }
        const result = arr.reduce((acc, v) => v.length+acc, target.length);
        if(result<answer) answer = result;
        
        return;
    }
    
    if(target.indexOf(searchTerm) === 0) {
        cnt++;
    } else {
        if(cnt === 1) {
            arr.push(searchTerm);
        } else {
            arr.push(cnt+searchTerm);
        }
        cnt=1;
    }
    recursive(target.slice(0, searchTerm.length), target.slice(searchTerm.length), cnt, arr);
}

const solution = (s)  =>{
    for(let i=0; i< s.length/2; i++) {
        recursive(s.slice(0, i+1), s.slice(i+1), 1, []);
    }
    return answer;
}