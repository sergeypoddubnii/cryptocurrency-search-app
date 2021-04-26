import mainCryptoReducer from './mainCryptocurrency/mainCryptoReducer';
import favCryptoReducer from './favCryptocurrency/favCryptoReducer';
import preloaderReducer from './preloader/preloaderReducer';
import { combineReducers } from 'redux';
import createReducer from './createReducer';

const reducers = [mainCryptoReducer, favCryptoReducer, preloaderReducer];
export const rootReducer = combineReducers(
  reducers.reduce(
    (acc, reducer) => ({
      ...acc,
      [reducer.stateKey]: createReducer(reducer.initial, reducer.handlers),
    }),
    {},
  ),
);

export type AppState = ReturnType<typeof rootReducer>;
