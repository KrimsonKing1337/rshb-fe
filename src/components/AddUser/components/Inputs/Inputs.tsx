import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import { inputsActions, inputsSelectors } from 'store/inputs';

import { Input } from '../Input';

const nameUuid = nanoid();
const emailUuid = nanoid();
const cityUuid = nanoid();
const phoneUuid = nanoid();

export const Inputs = () => {
  const dispatch = useDispatch();

  const name = useSelector(inputsSelectors.name);
  const nameHasAnError = useSelector(inputsSelectors.nameHasAnError);

  const email = useSelector(inputsSelectors.email);
  const emailHasAnError = useSelector(inputsSelectors.emailHasAnError);

  const city = useSelector(inputsSelectors.city);
  const cityHasAnError = useSelector(inputsSelectors.cityHasAnError);

  const phone = useSelector(inputsSelectors.phone);
  const phoneHasAnError = useSelector(inputsSelectors.phoneHasAnError);

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
      uuid: nameUuid,
      label: 'Имя',
      value: name,
      setter: (value: string) => dispatch(inputsActions.setName(value)),
      hasAnError: nameHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setNameHasAnError(value)),
      validate: defaultValidate,
    },
    {
      uuid: emailUuid,
      label: 'Email',
      value: email,
      setter: (value: string) => dispatch(inputsActions.setEmail(value)),
      hasAnError: emailHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setEmailHasAnError(value)),
      validate: validateEmail,
    },
    {
      uuid: cityUuid,
      label: 'Город',
      value: city,
      setter: (value: string) => dispatch(inputsActions.setCity(value)),
      hasAnError: cityHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setCityHasAnError(value)),
      validate: defaultValidate,
    },
    {
      uuid: phoneUuid,
      label: 'Телефон',
      value: phone,
      setter: (value: string) => dispatch(inputsActions.setPhone(value)),
      hasAnError: phoneHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setPhoneHasAnError(value)),
      validate: validatePhone,
    },
  ];

  return (
    <div>
      {inputs.map((inputCur) => {
        const {
          uuid,
          label,
          value,
          setter,
          errorSetter,
          hasAnError,
          validate,
        } = inputCur;

        return (
          <Input
            key={uuid}
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
