//제출용
function solution(s) {
  let answer = 0;
  const split = s.split("");
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];

  const isValid = (split) => {
    let arr = [];
    for (const word of split) {
      if (open.includes(word)) {
        arr.push(word);
      } else if (open.indexOf(arr.pop()) !== close.indexOf(word)) {
        return false;
      }
    }
    return arr.length ? false : true;
  };

  for (let i = 0; i < split.length; i++) {
    isValid(split) && answer++;
    split.push(split.shift());
  }
  return answer;
}
