const solution = (numbers, target) => {
    let answer = 0;
    const dfs = (index, acc)=> {
    if(index>=numbers.length) {
        if(target === acc) 
            answer++;
        return;
    }
        dfs(index+1, acc+numbers[index]);
        dfs(index+1, acc-numbers[index]);
    }
    dfs(0, 0);
    
    return answer;
}