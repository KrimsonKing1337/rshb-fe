import TextField from '@mui/material/TextField';

export type InputProps = {
  label: string;
  value: string;
  setter: (React.Dispatch<React.SetStateAction<string>>);
};

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Input = ({ label, value, setter }: InputProps) => {
  const changeHandler = (e: TextFieldChangeEvent) => {
    setter(e.target.value);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      sx={{ display: 'block' }}
      value={value}
      onChange={(e: TextFieldChangeEvent) => changeHandler(e)}
    />
  );
};
