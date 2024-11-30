import type { User as UserType } from '@types';

import { User, AddButton } from './components';

export const Users = () => {
  const usersString = localStorage.getItem('users') || '[]';
  const users = JSON.parse(usersString);

  return (
    <div>
      {users.map((userCur: UserType) => {
        return (
          <User user={userCur} />
        );
      })}

      <AddButton />
    </div>
  );
};
