import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'token',
  storage: storage,
  whitelist: ['user'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };