function solution(n) {
  var answer = n;
  let num1 = n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;

  while (true) {
    answer++;
    let num2 = answer
      .toString(2)
      .split("")
      .filter((x) => x === "1").length;
    if (num1 === num2) {
      break;
    }
  }

  return answer;
}
