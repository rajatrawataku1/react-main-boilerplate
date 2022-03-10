import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const middlewares = [thunkMiddleware, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
