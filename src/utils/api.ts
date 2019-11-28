import axios, { AxiosPromise } from 'axios';

export const searchMovies = (searchQuery: string): AxiosPromise => {
  return axios.request({
    url: 'https://omdbapi.com/?apikey=805ce45akkk&s=' + searchQuery,
    method: 'GET'
  });
};
