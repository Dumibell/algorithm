function solution(answers) {
  let a = [1, 2, 3, 4, 5]; //5
  let b = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
  let count = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < answers.length; i++) {
    let j = i < 5 ? i : i - 5 * Math.floor(i / 5);
    let k = i < 8 ? i : i - 8 * Math.floor(i / 8);
    let l = i < 10 ? i : i - 10 * Math.floor(i / 10);

    if (answers[i] === a[j]) count[1]++;
    if (answers[i] === b[k]) count[2]++;
    if (answers[i] === c[l]) count[3]++;
  }

  const arr = Object.entries(count).sort((a, b) => b[1] - a[1]);

  let answer = [Number(arr[0][0])];

  for (let i = 0; i < 2; i++) {
    if (arr[i][1] === arr[i + 1][1]) {
      answer.push(Number(arr[i + 1][0]));
    } else {
      break;
    }
  }

  return answer;
}
