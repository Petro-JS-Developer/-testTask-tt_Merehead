import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getUsersFromServer, allUsers, fromUser, toUser,
} from '../../Store/store';
import './styleTable.css';
import { User } from '../User/User';

export const Table = () => {
  const arrUsers = useSelector(allUsers);
  const fromUsers = useSelector(fromUser);
  const toUsers = useSelector(toUser);

  useEffect(() => {
    getUsersFromServer();
  }, []);

  return (
    <div className="gridTable">
      <div className="gridTable__header">
        <div className="headerItem">Full name</div>
        <div className="headerItem">Email</div>
        <div className="headerItem">Phone</div>
        <div className="headerItem">Website</div>
        <div className="headerItem">Actions</div>
      </div>
      <div className="tableBody">
        {arrUsers.map((user, i) => i >= fromUsers - 1 && i < toUsers && (
        <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
