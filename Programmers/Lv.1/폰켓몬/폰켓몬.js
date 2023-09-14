//제출용
function solution(nums) {
  let answer = 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      answer++;
    }
  }

  return answer > nums.length / 2 ? nums.length / 2 : answer;
}
