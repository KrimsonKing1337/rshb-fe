import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

export const AddButton = () => {
  const navigate = useNavigate();

  const buttonOnClickHandler = () => {
    navigate('/add-user');
  };

  return (
    <Button variant="contained" onClick={buttonOnClickHandler}>
      Добавить пользователя
    </Button>
  );
};
