import {
  GET_ALL_CRYPTOCURRENCY_START,
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  GET_ALL_CRYPTOCURRENCY_ERROR,
  FIND_CRYPTOCURRENCY,
  SORT_ASCENDING_PRICE,
  SORT_DESCENDING_PRICE,
  CryptoCurrencyType,
  GetAllCryptoCurrencySuccessType,
  GetAllCryptoCurrencyStartType,
  GetAllCryptoCurrencyErrorType,
  FindCryptoType,
} from './mainCryptoTypes';

const getAllCryptoCurrencyStart: GetAllCryptoCurrencyStartType = {
  type: GET_ALL_CRYPTOCURRENCY_START,
};

const getAllCryptoCurrencySuccess = (
  cryptocurrencies: CryptoCurrencyType[],
): GetAllCryptoCurrencySuccessType => {
  return {
    type: GET_ALL_CRYPTOCURRENCY_SUCCESS,
    payload: { cryptocurrencies },
  };
};

const getAllCryptoCurrencyError: GetAllCryptoCurrencyErrorType = {
  type: GET_ALL_CRYPTOCURRENCY_ERROR,
};

const findCrypto = (value: string): FindCryptoType => {
  return {
    type: FIND_CRYPTOCURRENCY,
    payload: { value },
  };
};

const sortAscendingPrice = {
  type: typeof SORT_ASCENDING_PRICE,
};

const sortDescendingPrice = {
  type: typeof SORT_DESCENDING_PRICE,
};

export default {
  getAllCryptoCurrencyStart,
  getAllCryptoCurrencySuccess,
  getAllCryptoCurrencyError,
  findCrypto,
  sortAscendingPrice,
  sortDescendingPrice,
};
