import { put, takeEvery, all, fork, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { SEARCH } from '../constants/movies';
import { ISearchAction } from '../types/IMovies';
import { searchMovies } from '../utils/api';
import { updateMoviesState, showError } from '../actions/movies';

interface IResponse {
  status: number;
  data: any;
}

function* doSearchRequest(action: ISearchAction): Generator {
  try {
    const response = yield call(searchMovies, action.payload.searchQuery);
    yield put(updateMoviesState((response as IResponse).data.Search));
  } catch (e) {
    yield put(showError(e.message));
  }
}

function* watchSearchRequest(): SagaIterator {
  yield takeEvery(SEARCH, doSearchRequest);
}

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchSearchRequest)]);
}
