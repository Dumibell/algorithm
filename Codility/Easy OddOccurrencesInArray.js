//첫번째 풀이 -> 효율성 에러
function solution1(A) {
  let answer = A.sort((a, b) => a - b);
  while (answer.length > 1) {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        answer.splice(i, 2);
      }
    }
  }
  return answer[0];
}

//두번째 풀이 -> 통과
function solution2(A) {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (arr.includes(A[i])) {
      arr.splice(arr.indexOf(A[i]), 1);
    } else {
      arr.push(A[i]);
    }
  }
  return arr[0];
}

let a = [9, 3, 9, 3, 9, 9, 3];

console.log(solution2(a));
