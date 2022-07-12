import axios from 'axios';
const { NEXT_PUBLIC_BE_HOST } = process.env;

export const getTicketAxios = (token) => {
   const URL = `${NEXT_PUBLIC_BE_HOST}/payments/tickets/7e1acddd-c12d-457e-9d51-a3b5e580f5a1`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};
