import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import createEncryptor from 'redux-persist-transform-encrypt';

import thunk from 'redux-thunk';

import { demo } from './demo';
import { auth } from './auth';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'developer') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger');
  const logger = createLogger({});
  middlewares.push(logger);
}

const reducers = combineReducers({
  demo,
  auth,
});

const encryptor = createEncryptor({
  secretKey: '&ug6!_v61ww8410ji9f=-06)v2&&nq$kc01249rg4fdk(l94m3',
});

export const getStore = (storage) => {
  const persistConfig = {
    key: 'root-store',
    storage,
    stateReconciler: hardSet,
    transforms: [encryptor],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
