import axios from 'axios';
const { NEXT_PUBLIC_BE_HOST } = process.env;

export const getTicketAxios = (token, id) => {
   const URL = `${NEXT_PUBLIC_BE_HOST}/payments/tickets/${id}`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};
