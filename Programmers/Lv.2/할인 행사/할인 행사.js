//제출용
function solution(want, number, discount) {
  let arr1 = [];
  let answer = 0;

  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      arr1.push(want[i]);
    }
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const arr2 = discount.slice(i, i + 10);
    if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) {
      answer++;
    }
  }
  return answer;
}
