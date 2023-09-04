export function solution(k: number, score: number[]) {
  const answer: number[] = [];

  for (let i = 0; i < score.length; i++) {
    const arr = score.slice(0, i + 1).sort((a, b) => b - a);

    if (i < k) {
      answer.push(arr[arr.length - 1]);
    } else {
      answer.push(arr[k - 1]);
    }
  }
  return answer;
}

const _k = 4;
const _score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(_k, _score));
