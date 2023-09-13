export function solution(arr: number[]) {
  let lcm = 1;
  let number = 0;

  while (true) {
    arr.forEach((num) => {
      if (lcm % num === 0) {
        number++;
      }
    });
    if (number === arr.length) {
      break;
    } else {
      number = 0;
    }
    lcm++;
  }
  return lcm;
}

const _arr = [1, 2, 3];

console.log(solution(_arr));
