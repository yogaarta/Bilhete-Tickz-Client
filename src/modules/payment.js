import axios from 'axios';

export const postPaymentAxios = (body, token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments`;
   return axios.post(URL, body, { headers: { Authorization: `Bearer ${token}` } });
};

export const confirmPaymentAxios = (id, token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/${id}`;
   return axios.patch(URL, undefined, { headers: { Authorization: `Bearer ${token}` } });
};

export const paymentCheckAxios = (token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/check`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};

export const paymentHistoryAxios = (id, token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/history/${id}`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};

export const getAllHistoryAxios = (token) => {
   const URL = `${process.env.NEXT_PUBLIC_BE_HOST}/payments/history?limit=2`;
   return axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
};
