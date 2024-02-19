export function getDates(offset = 0) {
  const dates = [];
  const today = new Date();
  const startOfWeek = new Date(today);

  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1 + (offset * 7));

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + i);
    dates.push(date.toLocaleDateString());
  }

  return dates;
}
