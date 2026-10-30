// Small date helpers for the room booking form.
// Dates are kept as text like "2026-04-14" — the same format <input type="date"> uses.

// "2026-04-14" → a Date at local midnight
function toDate(dateText) {
  const [year, month, day] = dateText.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// A Date → "2026-04-14"
export function toDateText(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

// "2026-04-14" plus 1 day → "2026-04-15"
export function addDays(dateText, days) {
  const date = toDate(dateText);
  date.setDate(date.getDate() + days);
  return toDateText(date);
}

// Number of nights between check-in and check-out (0 if a date is missing or the order is wrong)
export function countNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const oneDay = 24 * 60 * 60 * 1000;
  const nights = Math.round((toDate(checkOut).getTime() - toDate(checkIn).getTime()) / oneDay);
  return Math.max(nights, 0);
}

// "2026-04-14" → "Apr 14, 2026"
export function prettyDate(dateText) {
  return toDate(dateText).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
