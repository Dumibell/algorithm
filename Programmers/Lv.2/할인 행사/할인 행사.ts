export function solution(want: string[], number: number[], discount: string[]) {
  let arr1: string[] = []; // 사야할 물건들을 담을 배열 생성
  let answer = 0;

  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      arr1.push(want[i]); // 아이템을 살 개수만큼 배열에 추가
    }
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const arr2 = discount.slice(i, i + 10); // 10일 동안 회원권이 유지되므로 10개씩 자름
    if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) {
      answer++; //일치할 경우 answer값 + 1
    }
  }
  return answer;
}

const _want = ["banana", "apple", "rice", "pork", "pot"];
const _number = [3, 2, 2, 2, 1];
const _discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(_want, _number, _discount));
