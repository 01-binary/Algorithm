function solution(absolutes, signs) {
    return absolutes.reduce((a,e,i) => {
        if(signs[i])
            return a+e;
        return a-e;
    },0)
}