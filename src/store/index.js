import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { createBlacklistFilter, createWhitelistFilter } from 'redux-persist-transform-filter';

const persistConfig = {
  key: 'token',
  storage: storage,
  transforms: [
    createWhitelistFilter('user'),
    createWhitelistFilter('riskReducer'),
    createWhitelistFilter('currentRisk')
  ],
  //whitelist: ['riskReducer'], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = compose(applyMiddleware(thunk, logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };