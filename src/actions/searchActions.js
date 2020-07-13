import C from '../constants/constants.js';
import axios from 'axios';

import { api_key } from '../api/api_key';

export const searchMovie = text => dispatch => {
  dispatch({
    type: C.SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${text}`)
    .then(response =>
      dispatch({
        type: C.FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: C.LOADING
  };
};
