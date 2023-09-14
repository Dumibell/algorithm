export function solution(nums: number[]): number {
  let answer = 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      answer++;
    }
  }

  return answer > nums.length / 2 ? nums.length / 2 : answer;
}

const _nums = [3, 3, 3, 2, 2, 2];

console.log(solution(_nums));
