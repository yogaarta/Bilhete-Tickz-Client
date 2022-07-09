import axios from 'axios';

export const loginAxios = (body) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/auth`;
   return axios.post(URL, body);
};

export const logoutAxios = (token) => {
   let config = { headers: { Authorization: `Bearer ${token}` } }
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/auth`;
   return axios.delete(URL, config);
};
