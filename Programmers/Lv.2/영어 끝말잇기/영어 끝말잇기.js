export function solution(n, words) {
  //조건1 - 마지막 글자와 첫글자 일치
  //조건2 - 이전에 나왔던 단어가 또 나오면 안됨.

  let arr = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const prevWordArr = words[i - 1].split("");
    const nextWordArr = words[i].split("");
    if (
      !arr.includes(words[i]) &&
      prevWordArr[prevWordArr.length - 1] === nextWordArr[0]
    ) {
      arr.push(words[i]);
    } else {
      break;
    }
  }

  const num = (arr.length % n) + 1;
  const round = Math.floor(arr.length / n) + 1;

  return arr.length === words.length ? [0, 0] : [num, round];
}
