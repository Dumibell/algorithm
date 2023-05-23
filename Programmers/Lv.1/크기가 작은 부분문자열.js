function solution(t, p) {
  /** 부분문자열을 추가해줄 빈 arr 셋팅 */
  const arr = [];

  /** 파라미터로 받은 t를 배열 형태로 변환 */
  let tConvertedToArray = t.split("");

  for (let i = 0; i < tConvertedToArray.length; i++) {
    /** 부분문자열로 추출한 부분 */
    const partialString = tConvertedToArray.slice(i, p.length + i).join("");
    //partialString이 위에서 선언한 length와 같을 때만 arr에 추가한다.
    if (partialString.length === p.length) {
      arr.push(partialString);
    }
  }
  /** string으로 주어진 파라미터를 number로 변환 후 값을 비교해 filter된 arr의 길이를 구한다 */
  const answer = arr.filter((num) => Number(num) <= Number(p)).length;

  return answer;
}

console.log(solution("32340253", "122"));
