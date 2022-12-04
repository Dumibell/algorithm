function solution(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  const answer = arr.filter((x) => x % 2).length;
  return answer;
}
