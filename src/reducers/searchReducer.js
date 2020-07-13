import C from '../constants/constants.js';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case C.SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case C.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case C.LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
