export function solution(k: number, m: number, score: number[]) {
  score.sort((a, b) => b - a);
  let answer = 0;
  let idx = m - 1;

  for (let i = 0; i < score.length / m; i++) {
    if (score[idx]) {
      answer = answer + score[idx] * m;
      idx = idx + m;
    }
  }

  return answer;
}

const _k = 4;
const _m = 3;
const _score = [4, 1, 2, 4, 3];
console.log(solution(_k, _m, _score));
