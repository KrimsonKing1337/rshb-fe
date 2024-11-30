import TextField from '@mui/material/TextField';

export type InputProps = {
  label: string;
  value: string;
  setter: (value: string) => unknown;
  errorSetter: (value: boolean) => unknown;
  hasAnError: boolean;
};

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Input = (
  {
    label,
    value,
    setter,
    errorSetter,
    hasAnError,
  }: InputProps) => {
  const changeHandler = (e: TextFieldChangeEvent) => {
    const { value } = e.target;

    setter(value);

    errorSetter(false);
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
