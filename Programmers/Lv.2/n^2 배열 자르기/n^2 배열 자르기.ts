// 첫번째 풀이 - 런타임 에러로 실패
export function solution(n: number, left: number, right: number) {
  let arr: number[] = [];

  for (let i = 0; i < n; i++) {
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
  return arr.slice(left, right + 1);
}

// 두번째 풀이 - 통과
export function solution2(n: number, left: number, right: number) {
  let arr: number[] = [];
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

console.log(solution2(3, 2, 5));
