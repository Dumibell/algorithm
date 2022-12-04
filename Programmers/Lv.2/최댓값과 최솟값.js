function solution(s) {
  let arr = s.split(" ");
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  return [min, max].join(" ");
}
