import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import type { User as UserType } from '@types';

import { mainActions } from 'store/main';

export type UserProps = {
  user: UserType;
};

export const User = ({ user }: UserProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(mainActions.setUser(user));

    navigate('user-info');
  };

  const { name, email } = user;

  return (
    <Card className="cursor-pointer mt-5" onClick={clickHandler}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};
