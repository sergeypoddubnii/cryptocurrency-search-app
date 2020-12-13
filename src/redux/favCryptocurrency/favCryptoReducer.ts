import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  CryptoCurrency,
} from './favCyptoTypes';

const addToFavorite = (state: Array<CryptoCurrency>, action: any) => [
  ...state,
  action.payload.crypto,
];

const removeFromFavorite = (state: Array<CryptoCurrency>, action: any) =>
  state.filter((crypto: CryptoCurrency) => crypto.id !== action.payload.id);

const favCryptoReducer = {
  stateKey: 'favCryptocurrencies',
  initial: [],
  handlers: {
    [ADD_TO_FAVORITE]: addToFavorite,
    [REMOVE_FROM_FAVORITE]: removeFromFavorite,
  },
};

export default favCryptoReducer;
