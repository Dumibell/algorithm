function solution(a, b) {
  const dayNumber = new Date(`2016-${a}-${b}`).getDay();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day;

  for (let i = 0; i < days.length; i++) {
    if (dayNumber === i) {
      day = days[i];
    }
  }

  return day;
}

console.log(solution(1, 1));
