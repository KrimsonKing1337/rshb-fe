import { useState } from 'react';

import TextField from '@mui/material/TextField';

export type InputProps = {
  label: string;
  value: string;
  setter: (React.Dispatch<React.SetStateAction<string>>);
  validate: (value: string) => boolean;
};

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Input = ({ label, value, setter, validate }: InputProps) => {
  const [isError, setIsError] = useState(false);

  const changeHandler = (e: TextFieldChangeEvent) => {
    const { value } = e.target;

    setter(value);

    const validateResult = validate(value);

    setIsError(!validateResult);
  };

  return (
    <TextField
      error={isError}
      label={label}
      variant="outlined"
      sx={{ display: 'block' }}
      value={value}
      onChange={(e: TextFieldChangeEvent) => changeHandler(e)}
    />
  );
};
