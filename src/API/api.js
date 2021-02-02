const BASE_URL = 'https://mate-api.herokuapp.com';

const request = (url, id = '', options) => fetch(
  `${BASE_URL}/${url}/${id}`, options,
)
  .then((result) => result.json())
  .then((result) => result.data);

export const getUser = (userId = '') => request(`users${userId}`);

export const addUser = (
  name,
  email,
  phone,
  website,
) => request(
  'users',
  '',
  {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      phone,
      website,
    }),
    headers: { 'Content-type': 'application/json; charset=utf-8' },
  },
);

export const editUser = (id, name, email, phone, website) => request(
  'users',
  id,
  {
    method: 'PATCH',
    body: JSON.stringify({
      name,
      email,
      phone,
      website,
    }),
    headers: { 'Content-type': 'application/json; charset=utf-8' },
  },
);

export const deleteUser = (userId) => request('users', userId, {
  method: 'DELETE',
});

// export const deleteUser = (userId) => fetch(`${BASE_URL}/users/${userId}`, {
//   method: 'DELETE',
// })
//   .then((result) => (result.json()));
