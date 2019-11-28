export interface IMoviesState {
  data: IMovie[];
  isLoading: boolean;
  errorMessage?: string;
}
export interface IMovie {
  Title: string;
  Year: string;
  Poster: string;
}

export type IMoviesAction = ISearchAction | IUpdateMoviesStateAction | IShowErrorAction;

export interface ISearchAction {
  type: 'SEARCH';
  payload: {
    searchQuery: string;
  };
}

export interface IUpdateMoviesStateAction {
  type: 'UPDATE_MOVIES_STATE';
  payload: {
    data: IMovie[];
  };
}

export interface IShowErrorAction {
  type: 'SHOW_ERROR';
  payload: {
    errorMessage: string;
  };
}
