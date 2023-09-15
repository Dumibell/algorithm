//제출용
function solution(k, m, score) {
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
