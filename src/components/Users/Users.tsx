import type { User } from '@types';

import { User as UserComponent, AddButton } from './components';

export const Users = () => {
  const usersString = localStorage.getItem('users') || '[]';
  const users = JSON.parse(usersString);

  return (
    <div>
      {users.map((userCur: User) => {
        const { name, email } = userCur;

        return (
          <UserComponent name={name} email={email} />
        );
      })}

      <AddButton />
    </div>
  );
};
