import { useState } from 'react';

import { Input } from '../Input';

export const Inputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const inputs = [
    {
      label: 'Имя',
      value: name,
      setter: setName,
    },
    {
      label: 'Email',
      value: email,
      setter: setEmail,
    },
    {
      label: 'Город',
      value: city,
      setter: setCity,
    },
    {
      label: 'Телефон',
      value: phone,
      setter: setPhone,
    },
  ];
  
  return (
    <div>
      {inputs.map((inputCur) => {
        const { label, value, setter } = inputCur;

        return (
          <Input
            label={label}
            value={value}
            setter={setter}
          />
        );
      })}  
    </div>
  );
};
