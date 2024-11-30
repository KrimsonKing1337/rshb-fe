import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { mainSelectors } from 'store/main';

import { Inputs } from './components';

export const AddUser = () => {
  const inputHasAnError = useSelector(mainSelectors.inputsHasAnError);

  const buttonOnClickHandler = () => {
    console.log('buttonOnClick');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Добавить пользователя
        </Typography>

        <Inputs />

        <Button variant="contained" disabled={inputHasAnError} onClick={buttonOnClickHandler}>
          Добавить
        </Button>
      </CardContent>
    </Card>
  );
};
