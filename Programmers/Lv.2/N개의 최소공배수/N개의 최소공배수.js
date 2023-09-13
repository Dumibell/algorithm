//제출용
function solution(arr) {
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
