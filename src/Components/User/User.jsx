/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserFromState, isEditCellActionCreator, boolValCell, editUserAction,
} from '../../Store/store';
import './styleUser.css';
import { deleteUser, editUser } from '../../API/api';

export const User = ({
  name,
  email,
  phone,
  website,
  id,
}) => {
  const dispatch = useDispatch();
  const isEditCell = useSelector(boolValCell);

  const [editName, setEditName] = useState(false);
  const [customName, setCustomName] = useState(name);

  const [editEmail, setEditEmail] = useState(false);
  const [customEmail, setCustomEmail] = useState(email);

  const [editPhone, setEditPhone] = useState(false);
  const [customPhone, setCustomPhone] = useState(phone);

  const [editWebsite, setEditWebsite] = useState(false);
  const [customWebsite, setCustomWebsite] = useState(website);

  const verificationEditCell = (setValue) => {
    setEditName(false);
    setEditEmail(false);
    setEditPhone(false);
    setEditWebsite(false);

    dispatch(isEditCellActionCreator(id));
    setValue(true);
  };

  useEffect(() => {
    if (isEditCell !== id) {
      setEditName(false);
      setEditEmail(false);
      setEditPhone(false);
      setEditWebsite(false);
    }
  }, [isEditCell]);

  const handleEdit = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSave = (e, idUser, setValue, currentValue, baseValue) => {
    if (e.code === 'Enter') {
      if (!customName || !editEmail || !editPhone || !editWebsite) {
        setValue(currentValue);
      }

      editUser(
        idUser,
        customName,
        customEmail,
        customPhone,
        customWebsite,
      );

      dispatch(editUserAction(
        idUser,
        customName,
        customEmail,
        customPhone,
        customWebsite,
      ));

      dispatch(isEditCellActionCreator(true));
    }

    if (e.code === 'Escape') {
      setValue(baseValue);
      dispatch(isEditCellActionCreator(true));
    }
  };

  return (
    <>
      <div className="bodyItem bodyNameItem" onDoubleClick={() => { verificationEditCell(setEditName); }}>
        {editName
          ? (
            <input
              autoFocus
              value={customName}
              onChange={(e) => handleEdit(e, setCustomName)}
              onKeyDown={(e) => handleSave(e, id, setCustomName, customName, name)}
            />
          ) : customName}
      </div>
      <div className="bodyItem bodyEmailItem" onDoubleClick={() => { verificationEditCell(setEditEmail); }}>
        {editEmail
          ? (
            <input
              autoFocus
              value={customEmail}
              onChange={(e) => handleEdit(e, setCustomEmail)}
              onKeyDown={(e) => handleSave(e, id, setCustomEmail, customEmail, email)}
            />
          ) : customEmail}
      </div>
      <div className="bodyItem bodyPhoneItem" onDoubleClick={() => { verificationEditCell(setEditPhone); }}>
        {editPhone
          ? (

            <input
              autoFocus
              value={customPhone}
              onChange={(e) => handleEdit(e, setCustomPhone)}
              onKeyDown={(e) => handleSave(e, id, setCustomPhone, customPhone, phone)}
            />
          ) : customPhone}
      </div>
      <div className="bodyItem bodyWebsiteItem" onDoubleClick={() => { verificationEditCell(setEditWebsite); }}>
        {editWebsite
          ? (
            <input
              autoFocus
              value={customWebsite}
              onChange={(e) => handleEdit(e, setCustomWebsite)}
              onKeyDown={(e) => handleSave(e, id, setCustomWebsite, customWebsite, website)}
            />
          ) : customWebsite}
      </div>
      <div className="bodyItem bodyButtonItem">
        {' '}
        <button
          className="deleteButton"
          type="submit"
          onClick={async () => {
            await deleteUser(id);
            deleteUserFromState(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
