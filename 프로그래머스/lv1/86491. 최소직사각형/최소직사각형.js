function solution(sizes) {

    const [max, ...rest] = sizes.flat().sort((a,b) => b-a);
    const minList = sizes.map((v) => {
        const [a,b] =v;
        return Math.min(a,b);
    })
    const [max2, ...rest2] = minList.flat().sort((a,b) => b-a);
    return max*max2;
}