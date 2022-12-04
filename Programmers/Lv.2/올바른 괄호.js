function solution(s) {
  let cum = 0;
  for (let i = 0; i < s.length; i++) {
    cum += s[i] === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
