export interface CryptoCurrencyType {
  id: string;
  name: string;
  symbol: any;
  price: number;
}

export const GET_ALL_CRYPTOCURRENCY_START = 'GET_ALL_CRYPTOCURRENCY_START';
export const GET_ALL_CRYPTOCURRENCY_SUCCESS = 'GET_ALL_CRYPTOCURRENCY_SUCCESS';
export const GET_ALL_CRYPTOCURRENCY_ERROR = 'GET_ALL_CRYPTOCURRENCY_ERROR';
export const FIND_CRYPTOCURRENCY = 'FIND_CRYPTOCURRENCY';
export const SORT_DESCENDING_PRICE = 'SORT_DESCENDING_PRICE';
export const SORT_ASCENDING_PRICE = 'SORT_ASCENDING_PRICE';

export interface GetAllCryptoCurrencySuccessType {
  type: typeof GET_ALL_CRYPTOCURRENCY_SUCCESS;
  payload: {
    cryptocurrencies: CryptoCurrencyType[];
  };
}

export interface FindCryptoType {
  type: typeof FIND_CRYPTOCURRENCY;
  payload: {
    value: string;
  };
}

export interface GetAllCryptoCurrencyStartType {
  type: typeof GET_ALL_CRYPTOCURRENCY_START;
}
export interface GetAllCryptoCurrencyErrorType {
  type: typeof GET_ALL_CRYPTOCURRENCY_ERROR;
}

export interface SortAscendingPriceType {
  type: typeof SORT_ASCENDING_PRICE;
}

export interface SortDescendingPriceType {
  type: typeof SORT_DESCENDING_PRICE;
}

export type MainCryptoActionsTypes =
  | GetAllCryptoCurrencySuccessType
  | FindCryptoType
  | SortAscendingPriceType
  | SortDescendingPriceType
  | GetAllCryptoCurrencyStartType
  | GetAllCryptoCurrencyErrorType;
