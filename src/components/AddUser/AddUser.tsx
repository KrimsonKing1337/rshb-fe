import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { Inputs } from './components';

export const AddUser = () => {
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

        <Button variant="contained" onClick={buttonOnClickHandler}>
          Добавить
        </Button>
      </CardContent>
    </Card>
  );
};
