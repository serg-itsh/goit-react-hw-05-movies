// const API_KEY = '7a4cd4317772102a9b88ef6a54b71590';

// export const fetchEvents = async page => {
//   const response = await axios.get(
//     `/trending/movie/day?api_key=${API_KEY}&page=${page}`
//   );
//   return response.data._embedded.events;
// };

// ////////

// export const eventsById = async id => {
//   const responseById = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
//   return responseById.data;
// };
import axios from 'axios';

const KEY_API = '7a4cd4317772102a9b88ef6a54b71590';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: KEY_API,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//список самых популярных фильмов на сегодня для создания коллекции на главной странице.

export const getPoPMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/day');
  return data;
};

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//поиск кинофильма по ключевому слову на странице фильмов.

export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data.results;
};

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//запрос полной информации о фильме для страницы кинофильма.

export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//запрос информации о актёрском составе для страницы кинофильма.

export const getCastMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
//запрос обзоров для страницы кинофильма.

export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data;
};
