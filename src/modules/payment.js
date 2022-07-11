import axios from 'axios';

export const postPaymentAxios = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments`;
  return axios.post(URL, body, { headers: { Authorization: `Bearer ${token}` } });
};

export const confirmPaymentAxios = (token, id) => {
  const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/${id}`;
  return axios.patch(URL, { headers: { Authorization: `Bearer ${token}` } });
};

export const paymentCheckAxios = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/check`;
  return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};