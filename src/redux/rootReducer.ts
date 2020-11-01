import mainCryptoReducer from './mainCryptocurrency/mainCryptoReducer';
import favCryptoReducer from './favCryptocurrency/favCryptoReducer';
import preloaderReducer from './preloader/preloaderReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  mainCryptocurrencies: mainCryptoReducer,
  favCryptocurrencies: favCryptoReducer,
  isLoading: preloaderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
