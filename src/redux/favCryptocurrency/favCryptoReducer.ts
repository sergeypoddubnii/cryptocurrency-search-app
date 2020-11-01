import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  FavCryptoActionsTypes,
  CryptoCurrency,
} from './favCyptoTypes';

const favCryptoReducer = (state = [], action: FavCryptoActionsTypes) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [...state, action.payload.crypto];
    case REMOVE_FROM_FAVORITE:
      return state.filter(
        (crypto: CryptoCurrency) => crypto.id !== action.payload.id,
      );
    default:
      return state;
  }
};

export default favCryptoReducer;
