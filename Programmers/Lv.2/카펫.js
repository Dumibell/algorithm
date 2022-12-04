function solution(brown, yellow) {
  let area = brown + yellow;
  let arr = [];
  let answer = [];
  for (let i = 0; i <= area; i++) {
    if (area % i === 0) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[arr.length - 1 - i]) * 2 - 4 === brown) {
      answer.push(arr[i]);
      answer.push(arr[arr.length - 1 - i]);
      break;
    }
  }
  return answer.sort((a, b) => b - a);
}
