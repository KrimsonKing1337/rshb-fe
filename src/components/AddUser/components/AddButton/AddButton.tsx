import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from '@mui/material';

import type { User } from '@types';

import { inputsActions, inputsSelectors } from 'store/inputs';

import { defaultValidate, validateEmail, validatePhone } from './utils';

export const AddButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector(inputsSelectors.name);
  const email = useSelector(inputsSelectors.email);
  const city = useSelector(inputsSelectors.city);
  const phone = useSelector(inputsSelectors.phone);

  const buttonOnClickHandler = () => {
    let hasError = false;

    if (!defaultValidate(name)) {
      dispatch(inputsActions.setNameHasAnError(true));

      hasError = true;
    }

    if (!defaultValidate(city)) {
      dispatch(inputsActions.setCityHasAnError(true));

      hasError = true;
    }

    if (!validateEmail(email)) {
      dispatch(inputsActions.setEmailHasAnError(true));

      hasError = true;
    }

    if (!validatePhone(phone)) {
      dispatch(inputsActions.setPhoneHasAnError(true));

      hasError = true;
    }

    if (hasError) {
      return;
    }

    const usersString = localStorage.getItem('users') || '[]';
    const users: User[] = JSON.parse(usersString);

    const newUser = {
      name,
      email,
      city,
      phone,
    };

    const newUsers = [...users, newUser];

    localStorage.setItem('users', JSON.stringify(newUsers));

    navigate('/');
  };

  return (
    <Button variant="contained" onClick={buttonOnClickHandler}>
      Добавить
    </Button>
  );
};
