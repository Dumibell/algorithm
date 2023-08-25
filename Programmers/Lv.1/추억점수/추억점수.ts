export function solution(
  name: string[],
  yearning: number[],
  photo: string[][]
) {
  const arr: { name: string; yearning: number }[] = [];
  const answer: number[] = [];

  for (let i = 0; i < name.length; i++) {
    arr.push({ name: name[i], yearning: yearning[i] });
  }

  for (let i = 0; i < photo.length; i++) {
    answer.push(0);
  }

  photo.forEach((x, i) => {
    arr.forEach((y) => {
      if (x.includes(y.name)) {
        answer[i] = answer[i] + y.yearning;
      }
    });
  });

  return answer;
}

const _name = ["may", "kein", "kain", "radi"];
const _yearning = [5, 10, 1, 3];
const _photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(_name, _yearning, _photo));
