export function solution(k: number, tangerine: number[]) {
  const arr: { number: number; count: number }[] = [];
  const sortedTangerine = tangerine.sort((a, b) => a - b); // 같은 숫자끼리 모여있게 하기 위해 sort
  let total = 0; // 총 개수
  let answer = 0; // 정답

  let count = 1;
  for (let i = 0; i < sortedTangerine.length; i++) {
    if (sortedTangerine[i] === sortedTangerine[i + 1]) {
      count++; // 같은 숫자가 있을 경우 count에 1을 더해준다
    } else {
      arr.push({ number: tangerine[i], count: count });
      count = 1; //같은 숫자의 반복이 끝날 때 arr에 해당 객체를 push하고 count 초기화
    }
  }

  arr
    .sort((a, b) => b.count - a.count)
    .forEach((x) => {
      if (total < k) {
        total = total + x.count; // k보다 total이 작으면 그 다음 숫자의 count를 더해 k보다 같거나 커질때까지 반복한다.
        answer++;
      } else {
        return answer;
      }
    });

  return answer;
}

const _tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

console.log(solution(6, _tangerine));
