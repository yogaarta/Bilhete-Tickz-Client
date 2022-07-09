import axios from 'axios';
const { NEXT_PUBLIC_BE_HOST } = process.env

export const getCinemasBandungAxios = () => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies/cinemas/bandung`
  return axios.get(URL)
}

export const getCinemasJakartaAxios = () => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies/cinemas/jakarta`
  return axios.get(URL)
}