import { USER_UPDATE } from './';

export const userUpdate = (user) => {
  return {
    type: USER_UPDATE,
    payload: user,
  };
};