import mainCryptoTypes from './mainCryptoTypes';

const getAllCryptoCurrencyStart = {
  type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_START,
};

const getAllCryptoCurrencySuccess = cryptocurrencies => {
  return {
    type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_SUCCESS,
    payload: { cryptocurrencies },
  };
};

const getAllCryptoCurrencyError = {
  type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_ERROR,
};

const findCrypto = value => {
  return {
    type: mainCryptoTypes.FIND_CRYPTOCURRENCY,
    payload: { value },
  };
};

const sortAscendingPrice = {
  type: mainCryptoTypes.SORT_ASCENDING_PRICE,
};

const sortDescendingPrice = {
  type: mainCryptoTypes.SORT_DESCENDING_PRICE,
};

export default {
  getAllCryptoCurrencyStart,
  getAllCryptoCurrencySuccess,
  getAllCryptoCurrencyError,
  findCrypto,
  sortAscendingPrice,
  sortDescendingPrice,
};
