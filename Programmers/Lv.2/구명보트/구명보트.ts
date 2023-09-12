export function solution(people: number[], limit: number) {
  people.sort((a, b) => a - b);
  let answer = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    let sum = people[i] + people[j];
    if (sum <= limit) {
      i++;
    }
    j--;
    answer++;
  }

  return answer;
}

console.log(solution([40, 40, 40, 40, 80], 120));
