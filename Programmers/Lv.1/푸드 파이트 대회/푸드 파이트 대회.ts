export function solution(food: number[]) {
  //빈 arr 생성
  const arr: number[] = [];
  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    if (count > 0) {
      for (let j = 0; j < count; j++) {
        arr.push(i);
      }
    }
  }
  //뒤집은 배열 - 기존 arr 유지 위해 spread 연산자 사용
  const reversedArr = [...arr].reverse();
  // 사이에 0을 추가한 결과값 리턴
  return [...arr, 0, ...reversedArr].join("");
}

console.log(solution([1, 3, 4, 6]));
