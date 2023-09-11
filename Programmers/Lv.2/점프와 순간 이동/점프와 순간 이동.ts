export function solution(n: number) {
  let min = 1;
  let num = n;

  while (num > 1) {
    if (num % 2) {
      num = num - 1; //2로 계속 나눠서 나머지가 있을 때는 점프를 한거임
      min++;
    } else {
      num = num / 2; // 나머지가 없을 땐 순간이동
    }
  }
  return min;
}

//테스트
console.log(solution(5000));
