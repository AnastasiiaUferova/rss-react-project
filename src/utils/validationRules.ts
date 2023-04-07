export const getDateLimitations = (date: string): string | boolean => {
  const d = new Date(date);
  const yearLimitations = d.getFullYear() < 2024 && d.getFullYear() > 1900;

  if (!yearLimitations) {
    return `Date must be between 1900 and 2024`;
  }
  return true;
};

const occasionValidate = (value: string) => {
  if (value === 'Choose occasion for the movie') return 'Please choose occasion';
  return true;
};

export const registerOptions = {
  name: { required: 'Please enter a name' },
  date: { required: 'Please enter a date', validate: getDateLimitations },
  occasion: {
    required: 'Please choose occasion',
    validate: occasionValidate,
  },
};
