import produce from 'immer';
import { IMoviesState, IMoviesAction } from '../types/IMovies';
import { SEARCH, UPDATE_MOVIES_STATE, SHOW_ERROR } from '../constants/movies';

export default function movies(
  state: IMoviesState = {} as IMoviesState,
  action: IMoviesAction
): IMoviesState {
  return produce(state, draft => {
    switch (action.type) {
      case SEARCH: {
        draft.isLoading = true;
        return;
      }
      case UPDATE_MOVIES_STATE: {
        draft.data = action.payload.data;
        draft.isLoading = false;
        return;
      }
      case SHOW_ERROR: {
        draft.data = [];
        draft.isLoading = false;
        draft.errorMessage = action.payload.errorMessage;
        return;
      }
    }
  });
}
