import {
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  FIND_CRYPTOCURRENCY,
  SORT_ASCENDING_PRICE,
  SORT_DESCENDING_PRICE,
  CryptoCurrencyType,
} from './mainCryptoTypes';

const getAllCryptocurrencies = (
  state: Array<CryptoCurrencyType>,
  action: any,
) => action.payload.cryptocurrencies;

const findCryptocurrency = (state: Array<CryptoCurrencyType>, action: any) => {
  const findedCrypto = state.find(
    (crypto: CryptoCurrencyType) =>
      crypto.name.toLowerCase() === action.payload.value ||
      crypto.symbol.toLowerCase() === action.payload.value,
  );
  return findedCrypto ? [findedCrypto] : [];
};

const sortAscendingPrice = (state: Array<CryptoCurrencyType>, action: any) => {
  const ascendingPriceState = state.sort(
    (a: CryptoCurrencyType, b: CryptoCurrencyType) => {
      return a.price - b.price;
    },
  );
  return [...ascendingPriceState];
};

const sortDescendingPrice = (state: Array<CryptoCurrencyType>, action: any) => {
  const descendingPriceState = state.sort(
    (a: CryptoCurrencyType, b: CryptoCurrencyType) => {
      return b.price - a.price;
    },
  );
  return [...descendingPriceState];
};

const mainCryptoReducer = {
  stateKey: 'mainCryptocurrencies',
  initial: [],
  handlers: {
    [GET_ALL_CRYPTOCURRENCY_SUCCESS]: getAllCryptocurrencies,
    [FIND_CRYPTOCURRENCY]: findCryptocurrency,
    [SORT_ASCENDING_PRICE]: sortAscendingPrice,
    [SORT_DESCENDING_PRICE]: sortDescendingPrice,
  },
};
export default mainCryptoReducer;
