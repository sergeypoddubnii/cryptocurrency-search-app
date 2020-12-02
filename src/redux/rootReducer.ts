import mainCryptoReducer from './mainCryptocurrency/mainCryptoReducer';
import favCryptoReducer from './favCryptocurrency/favCryptoReducer';
import preloaderReducer from './preloader/preloaderReducer';
import { combineReducers } from 'redux';
import createReducer from './createReducer';

// export const rootReducer = combineReducers({
//   mainCryptocurrencies: mainCryptoReducer,
//   favCryptocurrencies: favCryptoReducer,
//   isLoading: preloaderReducer,
// });

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
console.log(
  reducers.reduce(
    (acc, reducer) => ({
      ...acc,
      [reducer.stateKey]: createReducer(reducer.initial, reducer.handlers),
    }),
    {},
  ),
);

export type AppState = ReturnType<typeof rootReducer>;
