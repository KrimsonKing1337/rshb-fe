import { useDispatch, useSelector } from 'react-redux';

import { inputsActions, inputsSelectors } from 'store/inputs';

import { Input } from '../Input';

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

  const inputs = [
    {
      id: 'name',
      label: 'Имя',
      value: name,
      setter: (value: string) => dispatch(inputsActions.setName(value)),
      hasAnError: nameHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setNameHasAnError(value)),
    },
    {
      id: 'email',
      label: 'Email',
      value: email,
      setter: (value: string) => dispatch(inputsActions.setEmail(value)),
      hasAnError: emailHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setEmailHasAnError(value)),
    },
    {
      id: 'city',
      label: 'Город',
      value: city,
      setter: (value: string) => dispatch(inputsActions.setCity(value)),
      hasAnError: cityHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setCityHasAnError(value)),
    },
    {
      id: 'phone',
      label: 'Телефон',
      value: phone,
      setter: (value: string) => dispatch(inputsActions.setPhone(value)),
      hasAnError: phoneHasAnError,
      errorSetter: (value: boolean) => dispatch(inputsActions.setPhoneHasAnError(value)),
    },
  ];

  return (
    <div>
      {inputs.map((inputCur) => {
        const {
          id,
          label,
          value,
          setter,
          errorSetter,
          hasAnError,
        } = inputCur;

        return (
          <Input
            key={id}
            label={label}
            value={value}
            setter={setter}
            errorSetter={errorSetter}
            hasAnError={hasAnError}
          />
        );
      })}
    </div>
  );
};
