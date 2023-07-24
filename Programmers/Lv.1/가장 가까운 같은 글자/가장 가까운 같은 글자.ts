export function solution(s: string) {
  let arr: string[] = [];
  let answer: number[] = [];
  for (let i = 0; i < s.length; i++) {
    let index = arr.lastIndexOf(s[i]);
    if (index === -1) {
      answer.push(index);
    } else {
      answer.push(i - index);
    }
    arr.push(s[i]);
  }
  return answer;
}

console.log(solution("banana"));
