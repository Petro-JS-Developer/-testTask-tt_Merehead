import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../../API/api';
import { addUserToState } from '../../Store/store';
import './styleForForm.css';

export const Form = () => (
  <div className="container">
    <form className="new-employee-form" name="addUser" method="get">
      <label className="labelForm" htmlFor="name">
        Full name:*
        {}
      </label>
      <input className="inputForm" type="text" name="name" id="name" required placeholder="Irina Sokolova" />
      <label className="labelForm" htmlFor="email">
        Email:*
        {}
      </label>
      <input className="inputForm" type="email" name="email" id="email" required placeholder="ivanov@gmail.com" />
      <label className="labelForm" htmlFor="phone">
        Phone:*
        {}
      </label>
      <input className="inputForm" type="tel" name="phone" id="phone" required placeholder="+38(097)532-23-11" />
      <label className="labelForm" htmlFor="webSite">
        Web site:*
        {}
      </label>
      <input className="inputForm" type="url" name="webSite" id="webSite" required placeholder="https://mysite.com" />
      <button
        type="submit"
        className="formButton"
        onClick={async (event) => {
          const { form } = event.target;
          await addUser(
            form.name.value,
            form.email.value,
            form.phone.value,
            form.webSite.value,
          );

          addUserToState({
            id: uuidv4(),
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            webSite: form.webSite.value,
          });

          form.reset();
        }}
      >
        Add new user
      </button>
    </form>
  </div>
);
