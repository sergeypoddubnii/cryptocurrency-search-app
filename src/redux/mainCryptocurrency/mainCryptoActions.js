import mainCryptoTypes from './mainCryptoTypes';

const getAllCryptoCurrency = cryptocurrencies => {
  return {
    type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY,
    payload: { cryptocurrencies },
  };
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
  getAllCryptoCurrency,
  findCrypto,
  sortAscendingPrice,
  sortDescendingPrice,
};
