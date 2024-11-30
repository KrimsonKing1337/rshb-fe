export const defaultValidate = (value: string) => {
  return value.length > 0;
};

export const validateEmail = (value: string) => {
  const re = /\S+@\S+\.\S+/;

  return re.test(value);
};

export const validatePhone = (value: string) => {
  const re = /^\d+$/;

  return re.test(value);
};
