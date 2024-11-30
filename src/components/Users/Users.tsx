import { User, AddButton } from './components';

export const Users = () => {
  return (
    <div>
      <User name="Имя Фамилия" email="Email" />
      <AddButton />
    </div>
  );
};
