import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export const Empty = () => {
  return (
    <Card className="mt-5">
      <CardContent>
        <Typography variant="h5" component="div">
          Нет пользователей
        </Typography>
      </CardContent>
    </Card>
  );
};
