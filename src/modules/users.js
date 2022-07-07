import axios from 'axios';

export const getUsersAxios = (token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/users`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};
