export function solution(cards1: string[], cards2: string[], goal: string[]) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

const _cards1 = ["i", "drink", "water", "dd"];
const _cards2 = ["want", "to"];
const _goal = ["i", "want", "to", "drink", "water"];

console.log(solution(_cards1, _cards2, _goal));
