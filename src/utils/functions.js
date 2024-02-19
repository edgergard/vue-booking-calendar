export function getDates(offset = 0) {
  const dates = [];
  const today = new Date();
  const startOfWeek = new Date(today);

  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1 + (offset * 7));

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + i);
    const formattedDate = date.toISOString().split('T')[0];
    dates.push(formattedDate);
  }

  return dates;
}

export function getWeeklyBookings(data, dates) {
  return data.filter(booking =>
    booking.duration !== 0
    && (dates.includes(booking.start) || dates.includes(booking.end)));
}

export function getRoomBookings(bookings, roomName) {
  return bookings.filter(booking => booking.roomDetails.name === roomName);
}