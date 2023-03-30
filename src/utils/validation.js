import getDateLimitations from './validationRules';
export const validateForm = (formData) => {
    const { name, categories, date, occasion, image } = formData;
    const errors = {};
    if (!name.trim()) {
        errors.name = 'Please enter a name';
    }
    if (categories.length === 0) {
        errors.categories = 'Please select at least 1 category';
    }
    if (!image) {
        errors.image = 'Please upload an image';
    }
    const { yearLimitations } = getDateLimitations(date);
    if (!date) {
        errors.date = 'Please enter a date';
    }
    else if (!yearLimitations) {
        errors.date = 'Please enter a year between 1900 and 2024';
    }
    if (occasion === '' || occasion === 'Choose occasion for the movie') {
        errors.occasion = 'Please choose occasion';
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};
