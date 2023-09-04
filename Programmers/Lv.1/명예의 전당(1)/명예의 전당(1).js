//프로그래머스 제출용
function solution(k, score) {
  const answer = [];

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
