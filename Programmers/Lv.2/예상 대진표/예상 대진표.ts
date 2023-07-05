/** 첫번째 풀이 */
export function firstSolution(n: number, a: number, b: number): number {
  let count = Math.floor(Math.log2(n)); // 2의 제곱일 때 n의 지수 구하기
  let num = n / 2;

  if (a > num !== b > num) {
    return count;
  } else {
    while (a > num === b > num) {
      num = num / 2;
      count--;
    }
    return count;
  }
}

/** 두번째 풀이 */
export function secondSolution(n: number, a: number, b: number): number {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}
