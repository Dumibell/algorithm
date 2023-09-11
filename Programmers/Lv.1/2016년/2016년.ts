export function solution(a: number, b: number) {
  const dayNumber = new Date(`2016-${a}-${b}`).getDay();
  const days: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day: string | undefined;

  for (let i = 0; i < days.length; i++) {
    if (dayNumber === i) {
      day = days[i];
    }
  }

  return day;
}

console.log(solution(1, 1));
