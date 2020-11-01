import {
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  FIND_CRYPTOCURRENCY,
  SORT_ASCENDING_PRICE,
  SORT_DESCENDING_PRICE,
  MainCryptoActionsTypes,
  CryptoCurrencyType,
} from './mainCryptoTypes';

const mainCryptoReducer = (state = [], action: MainCryptoActionsTypes) => {
  switch (action.type) {
    case GET_ALL_CRYPTOCURRENCY_SUCCESS:
      return action.payload.cryptocurrencies;

    case FIND_CRYPTOCURRENCY:
      const findedCrypto = state.find(
        (crypto: CryptoCurrencyType) =>
          crypto.name.toLowerCase() === action.payload.value ||
          crypto.symbol.toLowerCase() === action.payload.value,
      );
      return findedCrypto ? [findedCrypto] : [];
    case SORT_ASCENDING_PRICE:
      const ascendingPriceState = state.sort(
        (a: CryptoCurrencyType, b: CryptoCurrencyType) => {
          return a.price - b.price;
        },
      );
      return [...ascendingPriceState];

    case SORT_DESCENDING_PRICE:
      const descendingPriceState = state.sort(
        (a: CryptoCurrencyType, b: CryptoCurrencyType) => {
          return b.price - a.price;
        },
      );
      return [...descendingPriceState];

    default:
      return state;
  }
};

export default mainCryptoReducer;
