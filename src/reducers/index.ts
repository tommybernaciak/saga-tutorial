import { combineReducers } from 'redux';
import movies from './movies';

/**
 * Combine all reducers
 */
const rootReducer = combineReducers({
  movies
});

export default rootReducer;
