import axios from 'axios';
const {NEXT_PUBLIC_BE_HOST} = process.env

export const getMoviesHomeAxios = () => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies?page=1&limit=5`
  return axios.get(URL)
}