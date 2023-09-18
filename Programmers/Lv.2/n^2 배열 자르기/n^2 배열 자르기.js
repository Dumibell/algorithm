//제출용
function solution(n, left, right) {
  let arr = [];
  const start = left === 0 ? 0 : Math.ceil(left / n) - 1;
  const end = Math.ceil(right / n);

  for (let i = start; i < end; i++) {
    for (let j = i; j < n; j++) {
      if (i === j) {
        for (let k = 0; k <= i; k++) {
          arr.push(j + 1);
        }
      } else {
        arr.push(j + 1);
      }
    }
  }
  return arr.splice(left % n, right - left + 1);
}
