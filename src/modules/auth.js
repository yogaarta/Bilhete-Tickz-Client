import axios from 'axios';

export const loginAxios = (body) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/auth`;
   return axios.post(URL, body);
};
