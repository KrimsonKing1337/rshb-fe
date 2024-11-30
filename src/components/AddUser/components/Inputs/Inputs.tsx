import { useState } from 'react';

import { Input } from '../Input';

export const Inputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const defaultValidate = (value: string) => {
    return value.length > 0;
  };

  const validateEmail = (value: string) => {
    const re = /\S+@\S+\.\S+/;

    return re.test(value);
  };

  const validatePhone = (value: string) => {
    const re = /^\d+$/;

    return re.test(value);
  };

  const inputs = [
    {
      label: 'Имя',
      value: name,
      setter: setName,
      validate: defaultValidate,
    },
    {
      label: 'Email',
      value: email,
      setter: setEmail,
      validate: validateEmail,
    },
    {
      label: 'Город',
      value: city,
      setter: setCity,
      validate: defaultValidate,
    },
    {
      label: 'Телефон',
      value: phone,
      setter: setPhone,
      validate: validatePhone,
    },
  ];

  return (
    <div>
      {inputs.map((inputCur) => {
        const { label, value, setter, validate } = inputCur;

        return (
          <Input
            label={label}
            value={value}
            setter={setter}
            validate={validate}
          />
        );
      })}
    </div>
  );
};
