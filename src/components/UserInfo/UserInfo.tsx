import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { useNavigate } from 'react-router';

import { mainSelectors } from 'store/main';

export const UserInfo = () => {
  const navigate = useNavigate();

  const user = useSelector(mainSelectors.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  if (!user) {
    return;
  }

  const headerClickHandler = () => {
    navigate('/');
  };

  const { name, email, city, phone } = user;

  const values = [
    {
      label: 'Email',
      value: email,
    },
    {
      label: 'Город',
      value: city,
    },
    {
      label: 'Телефон',
      value: phone,
    },
  ];

  return (
    <Card>
      <CardHeader title="x" onClick={headerClickHandler} />

      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        {values.map((valueCur) => {
          const { label, value } = valueCur;

          return (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {label}: {value}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};
