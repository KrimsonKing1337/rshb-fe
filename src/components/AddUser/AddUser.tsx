import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Inputs, AddButton } from './components';

export const AddUser = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Добавить пользователя
        </Typography>

        <Inputs />

        <AddButton />
      </CardContent>
    </Card>
  );
};
