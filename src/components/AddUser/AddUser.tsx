import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { Inputs, AddButton } from './components';

export const AddUser = () => {
  const navigate = useNavigate();

  const headerClickHandler = () => {
    navigate('/');
  };

  return (
    <Card>
      <CardHeader title="x" onClick={headerClickHandler} />

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
