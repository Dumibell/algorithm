export function solution(s: string) {
  let answer = 0;
  const split = s.split("");
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];

  const isTrue = (split: string[]) => {
    let arr: string[] = [];
    for (const word of split) {
      if (open.includes(word)) {
        arr.push(word);
      } else if (open.indexOf(arr.pop() as string) !== close.indexOf(word)) {
        return false;
      }
    }
    return arr.length ? false : true;
  };

  for (let i = 0; i < split.length; i++) {
    isTrue(split) && answer++;
    split.push(split.shift() as string);
  }
  return answer;
}

const _s = "[](){}";

console.log(solution(_s));
