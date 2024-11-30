import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export type UserProps = {
  name: string;
  email: string;
};

export const User = ({ name, email }: UserProps) => {
  return (
    <Card>
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
