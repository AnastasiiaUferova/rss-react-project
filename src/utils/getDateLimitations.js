export default function getDateLimitations(date) {
  const d = new Date(date);
  const yearLimitations = d.getFullYear() < 2024 && d.getFullYear() > 1900;
  return {
    yearLimitations,
  };
}
