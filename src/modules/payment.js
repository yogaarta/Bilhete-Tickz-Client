import axios from 'axios';

export const postPaymentAxios = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments`;
  return axios.post(URL, body, { headers: { Authorization: `Bearer ${token}` } });
};