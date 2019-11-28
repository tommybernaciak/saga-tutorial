import { IStore } from '../types/IStore';

export const initialState: IStore = {
  movies: {
    data: [],
    isLoading: false
  }
};
