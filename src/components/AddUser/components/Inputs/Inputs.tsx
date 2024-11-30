import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { mainActions } from 'store/main';

import { Input } from '../Input';

export const Inputs = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [nameHasAnError, setNameHasAnError] = useState(true);

  const [email, setEmail] = useState('');
  const [emailHasAnError, setEmailHasAnError] = useState(true);

  const [city, setCity] = useState('');
  const [cityHasAnError, setCityHasAnError] = useState(true);

  const [phone, setPhone] = useState('');
  const [phoneHasAnError, setPhoneHasAnError] = useState(true);

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

  if (nameHasAnError || emailHasAnError || phoneHasAnError || cityHasAnError) {
    dispatch(mainActions.setInputsHasAnError(true));
  } else if (!nameHasAnError && !emailHasAnError && !phoneHasAnError && !cityHasAnError) {
    dispatch(mainActions.setInputsHasAnError(false));
  }

  const inputs = [
    {
      label: 'Имя',
      value: name,
      setter: setName,
      hasAnError: nameHasAnError,
      errorSetter: setNameHasAnError,
      validate: defaultValidate,
    },
    {
      label: 'Email',
      value: email,
      setter: setEmail,
      hasAnError: emailHasAnError,
      errorSetter: setEmailHasAnError,
      validate: validateEmail,
    },
    {
      label: 'Город',
      value: city,
      setter: setCity,
      hasAnError: cityHasAnError,
      errorSetter: setCityHasAnError,
      validate: defaultValidate,
    },
    {
      label: 'Телефон',
      value: phone,
      setter: setPhone,
      hasAnError: phoneHasAnError,
      errorSetter: setPhoneHasAnError,
      validate: validatePhone,
    },
  ];

  return (
    <div>
      {inputs.map((inputCur) => {
        const {
          label,
          value,
          setter,
          errorSetter,
          hasAnError,
          validate,
        } = inputCur;

        return (
          <Input
            label={label}
            value={value}
            setter={setter}
            errorSetter={errorSetter}
            hasAnError={hasAnError}
            validate={validate}
          />
        );
      })}
    </div>
  );
};
