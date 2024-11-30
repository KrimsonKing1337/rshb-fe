import TextField from '@mui/material/TextField';

export type InputProps = {
  label: string;
  value: string;
  setter: (value: string) => unknown;
  errorSetter: (value: boolean) => unknown;
  hasAnError: boolean;
  validate: (value: string) => boolean;
};

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Input = (
  {
    label,
    value,
    setter,
    errorSetter,
    hasAnError,
    validate,
  }: InputProps) => {
  const changeHandler = (e: TextFieldChangeEvent) => {
    const { value } = e.target;

    setter(value);

    const validateResult = validate(value);

    errorSetter(!validateResult);
  };

  return (
    <TextField
      error={hasAnError}
      label={label}
      variant="outlined"
      sx={{ display: 'block' }}
      value={value}
      onChange={(e: TextFieldChangeEvent) => changeHandler(e)}
    />
  );
};
