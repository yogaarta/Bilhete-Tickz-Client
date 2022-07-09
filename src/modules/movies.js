import axios from 'axios';
const { NEXT_PUBLIC_BE_HOST } = process.env

export const getMoviesHomeAxios = () => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies?page=1&limit=5`
  return axios.get(URL)
}

export const getNowShowingMoviesAxios = (name="", sort="", order="", page="1") => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies/nowshow?name=${name}&sort=${sort}&order=${order}&page=${page}`
  return axios.get(URL)
}

export const getUpcomingMoviesAxios = (name="", month="",sort="", order="", page="1") => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies/upcoming?name=${name}&month=${month}&sort=${sort}&order=${order}&page=${page}`
  return axios.get(URL)
}


export const getMoviesDetailAxios = (id) => {
  const URL = `${NEXT_PUBLIC_BE_HOST}/movies/${id}`
  return axios.get(URL)
}
