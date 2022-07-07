import { loginAxios } from '../../modules/auth';
import { LOGIN_ACCOUNT } from './actionString';

export const loginAction = (body) => {
   return {
      type: LOGIN_ACCOUNT,
      payload: loginAxios(body),
   };
};
