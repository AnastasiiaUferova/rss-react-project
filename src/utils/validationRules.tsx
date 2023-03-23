export default function validate(values) {

  const errors = {};

  if (!values.name) {
    errors.email = 'This is a required field';
  }

  if (!values.password) {
    errors.password = 'This is a required field';
  } else if (values.password.length < 2) {
    errors.password = 'Password must be more than 2 characters';
  }

  if (!values.name) {
    errors.name = 'This is a required field';
  } else if (values.name.length === 1) {
    errors.name = 'Name must be more than 2 characters';
  } else if (values.name.length === 1 && !namePattern.test(values.name)) {
    errors.name = 'Unacceptable symbols';
  } else if (values.name.length > 1 && !namePattern.test(values.name)) {
    errors.name = 'Unacceptable symbols';
  }

  return errors;
}
