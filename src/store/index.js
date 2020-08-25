import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const

  initialState = {};

const middleware = [thunk];

const allStoreEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
);

export default createStore(
  rootReducer,
  initialState,
  allStoreEnhancers,
);
