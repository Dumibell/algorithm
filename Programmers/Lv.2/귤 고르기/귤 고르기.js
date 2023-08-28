function solution(k, tangerine) {
  const arr = [];
  const sortedTangerine = tangerine.sort((a, b) => a - b);
  let total = 0;
  let answer = 0;

  let count = 1;
  for (let i = 0; i < sortedTangerine.length; i++) {
    if (sortedTangerine[i] === sortedTangerine[i + 1]) {
      count++;
    } else {
      arr.push({ number: tangerine[i], count: count });
      count = 1;
    }
  }

  arr
    .sort((a, b) => b.count - a.count)
    .forEach((x) => {
      if (total < k) {
        total = total + x.count;
        answer++;
      } else {
        return answer;
      }
    });

  return answer;
}

const _tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

console.log(solution(6, _tangerine));
