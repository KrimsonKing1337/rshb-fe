import { useEffect } from 'react';

import { nanoid } from 'nanoid';

import type { User as UserType } from '@types';

import { useDispatch, useSelector } from 'react-redux';

import { mainActions, mainSelectors } from 'store/main';

import { User, AddButton, Empty } from './components';

export const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(mainSelectors.users);

  useEffect(() => {
    dispatch(mainActions.fetchUsers());
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
