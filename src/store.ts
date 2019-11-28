import { Action, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { initialState } from './constants/initialState';
import rootSaga from './sagas/search';

/**
 * Create store with combined reducers, sagas and redux devtools
 * @returns Create store with combined reducers, sagas and added redux devtools
 */
export function makeStore(): Store<Action> {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)(
    rootReducer,
    initialState
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
