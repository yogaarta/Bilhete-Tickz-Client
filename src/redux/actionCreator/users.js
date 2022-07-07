import { getUsersAxios } from '../../modules/users';
import { GET_USER_INFO } from './actionString';

export const getUsersAction = (token) => {
   return {
      type: GET_USER_INFO,
      payload: getUsersAxios(token),
   };
};
