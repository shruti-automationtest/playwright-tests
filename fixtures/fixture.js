export const API_URLS = {
  GET_USERS: 'https://reqres.in/api/users?page=2',
  POST_USER: 'https://reqres.in/api/users',
  PUT_USER: 'https://reqres.in/api/users/2',
};

export const userData = { name: 'John Doe', job: 'Software Engineer' };
export const userDataPut = { name: 'Jane Doe', job: 'Product Manager' };

// userCredentials.js
export const userCredentials = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
};