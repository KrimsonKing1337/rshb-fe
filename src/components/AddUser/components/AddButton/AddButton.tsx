import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from '@mui/material';

import { inputsSelectors } from 'store/inputs';

export const AddButton = () => {
  const navigate = useNavigate();

  const name = useSelector(inputsSelectors.name);
  const nameHasAnError = useSelector(inputsSelectors.nameHasAnError);

  const email = useSelector(inputsSelectors.email);
  const emailHasAnError = useSelector(inputsSelectors.emailHasAnError);

  const city = useSelector(inputsSelectors.city);
  const cityHasAnError = useSelector(inputsSelectors.cityHasAnError);

  const phone = useSelector(inputsSelectors.phone);
  const phoneHasAnError = useSelector(inputsSelectors.phoneHasAnError);

  const buttonOnClickHandler = () => {
    const usersString = localStorage.getItem('users') || '[]';
    const users = JSON.parse(usersString);

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

  let buttonIsDisabled = true;

  if (nameHasAnError || emailHasAnError || phoneHasAnError || cityHasAnError) {
    buttonIsDisabled = true;
  } else if (!nameHasAnError && !emailHasAnError && !phoneHasAnError && !cityHasAnError) {
    buttonIsDisabled = false;
  }

  return (
    <Button variant="contained" disabled={buttonIsDisabled} onClick={buttonOnClickHandler}>
      Добавить
    </Button>
  );
};
