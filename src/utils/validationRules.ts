import * as yup from 'yup';

const specialCharacters = '~`!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?';

const regex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${specialCharacters}])[A-Za-z\\d${specialCharacters}]{8,}$`,
);

const checkBlankCharacter = (value: any) => {
  if (value.length === 0) {
    return true;
  }
  return value ? value.trim().length > 0 : false;
};

const FIELD_NAME_DEFAULT = 'This field';

const requiredMessage = (fieldName: string = FIELD_NAME_DEFAULT): string =>
    `${fieldName} is required.`;

const blankCharacterMessage = (fieldName: string = FIELD_NAME_DEFAULT): string =>
    `${fieldName} cannot be a blank character.`;

const minLengthMessage = (fieldName: string = FIELD_NAME_DEFAULT, min: number): string =>
    `${fieldName} must be at least ${min} characters.`;

const maxLengthMessage = (fieldName: string = FIELD_NAME_DEFAULT, max: number): string =>
    `${fieldName} must be at most ${max} characters.`;

export const validatePassword = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).required(requiredMessage()).min(8, minLengthMessage('Password', 8)).max(20, maxLengthMessage('Password', 20)).matches(regex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
};

export const validateConfirmPassword = (fieldCompare = 'password') => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).required(requiredMessage()).oneOf([yup.ref(fieldCompare), ''], 'Confirm password does not match.');
};

export const validatePhoneNumber = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).test(
      'isValidPhoneNumber',
      'Phone number must contain only numbers.',
      (value) => !value || /^[0-9]+$/.test(value), // Only apply the test if value is not empty
  ).test(
      'length',
      'Phone number must be between 7 and 11 characters.',
      (value) => !value || (value.length >= 7 && value.length <= 11), // Apply length rule only if value exists
  );
};

export const validateEmail = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).required(requiredMessage()).email('Please enter a valid email.').max(50, maxLengthMessage('Email', 50)).test('is-valid-email-domain', 'Please enter a valid email.', (value) => {
    // Only run this test if value is not empty and a valid string
    if (!value) return false;

    // Regular expression to validate that email has a valid domain
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(value);
  });
};

export const validateFullName = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).max(50, maxLengthMessage('Full name', 50)).required(requiredMessage());
};

export const validatePositionName = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).max(50, maxLengthMessage('Position', 50));
};

export const validateBusinessName = () => {
  return yup.string().test('whitespace', blankCharacterMessage(), checkBlankCharacter).max(50, maxLengthMessage('Business name', 50));
};

export const signupValidationSchema = yup.object().shape({
  fullName: validateFullName(),
  businessName: validateBusinessName(),
  email: validateEmail(),
  password: validatePassword(),
  confirmPassword: validateConfirmPassword(),
});
