function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function solution(number) {
    var answer = 0;
    const comp = combination(number, 3);
    comp.forEach((arr) => {
        const sum = arr.reduce((acc, v) => acc+v, 0);
        if(sum === 0) answer++;
    })
    return answer;
}