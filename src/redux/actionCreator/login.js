import { loginAxios, logoutAxios } from '../../modules/auth';
import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from './actionString';

export const loginAction = (body) => {
   return {
      type: LOGIN_ACCOUNT,
      payload: loginAxios(body),
   };
};

export const logoutAction = () => {
   return {
      type: LOGOUT_ACCOUNT
   };
}