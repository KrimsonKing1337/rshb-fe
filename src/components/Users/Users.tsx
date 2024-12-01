import { useEffect } from 'react';

import { nanoid } from 'nanoid';

import type { User as UserType } from '@types';

import { addUser, getUsers } from 'api';

import { User, AddButton, Empty } from './components';

export const Users = () => {
  const usersString = localStorage.getItem('users') || '[]';
  const users = JSON.parse(usersString);

  useEffect(() => {
    addUser();
    getUsers();
  }, []);

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
