import { useSelector } from 'react-redux';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import { mainSelectors } from 'store/main';

export const UserInfo = () => {
  const user = useSelector(mainSelectors.user);

  if (!user) {
    return;
  }

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
