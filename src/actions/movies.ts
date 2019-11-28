import { SEARCH, UPDATE_MOVIES_STATE, SHOW_ERROR } from './../constants/movies';
import {
  IMovie,
  ISearchAction,
  IUpdateMoviesStateAction,
  IShowErrorAction
} from '../types/IMovies';

export const search = (searchQuery: string): ISearchAction => {
  return {
    type: SEARCH,
    payload: { searchQuery }
  };
};
export const updateMoviesState = (data: IMovie[]): IUpdateMoviesStateAction => {
  return {
    type: UPDATE_MOVIES_STATE,
    payload: { data }
  };
};
export const showError = (errorMessage: string): IShowErrorAction => {
  return {
    type: SHOW_ERROR,
    payload: { errorMessage }
  };
};
