import { nanoid } from 'nanoid';

import type { User as UserType } from '@types';

import { User, AddButton, Empty } from './components';

export const Users = () => {
  const usersString = localStorage.getItem('users') || '[]';
  const users = JSON.parse(usersString);

  return (
    <div className="w-960 m-auto">
      {!users.length && (
        <Empty />
      )}

      {users.map((userCur: UserType) => {
        return (
          <User key={nanoid()} user={userCur} />
        );
      })}

      <AddButton />
    </div>
  );
};
