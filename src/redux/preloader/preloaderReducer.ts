import {
  GET_ALL_CRYPTOCURRENCY_START,
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  GET_ALL_CRYPTOCURRENCY_ERROR,
} from '../mainCryptocurrency/mainCryptoTypes';

const preloaderReducer = {
  stateKey: 'isLoading',
  initial: false,
  handlers: {
    [GET_ALL_CRYPTOCURRENCY_START]: () => true,
    [GET_ALL_CRYPTOCURRENCY_SUCCESS]: () => false,
    [GET_ALL_CRYPTOCURRENCY_ERROR]: () => false,
  },
};

export default preloaderReducer;
