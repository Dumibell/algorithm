function solution(n, arr1, arr2) {
  let x = [];
  let y = [];
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    x.push(arr1[i].toString(2).padStart(n, 0));
    y.push(arr2[i].toString(2).padStart(n, 0));
  }
  for (let i = 0; i < x.length; i++) {
    let str = "";
    for (let j = 0; j < x.length; j++) {
      if (x[i][j] === "1" || y[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}
