function solution(nums) {
    var answer = 0;
    const set = new Set(nums);
    
    return Math.min(nums.length /2, [...set].length);
}