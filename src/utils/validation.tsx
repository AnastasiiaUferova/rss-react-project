import { FormState } from '../components/Form/Form';

export const validateForm = (formData: FormState) => {
  const { name, categories, date, image } = formData;
  const errors: { [key: string]: string } = {};

  if (!name.trim()) {
    errors.name = 'Please enter a name';
  }

  if (!categories || categories.length === 0) {
    errors.categories = 'Please select at least one category';
  }

  if (!image) {
    errors.image = 'Please upload an image';
  }

  const d = new Date(date);
  const dateLimitations = d.getFullYear() < 2024 && d.getFullYear() > 1900;

  if (!date) {
    errors.date = 'Please enter a date';
  } else if (!dateLimitations) {
    errors.date = 'Please enter a year between 1900 and 2024';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
