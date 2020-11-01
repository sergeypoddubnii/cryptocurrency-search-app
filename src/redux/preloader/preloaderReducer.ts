import {
  GET_ALL_CRYPTOCURRENCY_START,
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  GET_ALL_CRYPTOCURRENCY_ERROR,
  MainCryptoActionsTypes,
} from '../mainCryptocurrency/mainCryptoTypes';

const preloaderReducer = (state = false, action: MainCryptoActionsTypes) => {
  const { type } = action;
  switch (type) {
    case GET_ALL_CRYPTOCURRENCY_START:
      return true;
    case GET_ALL_CRYPTOCURRENCY_SUCCESS:
    case GET_ALL_CRYPTOCURRENCY_ERROR:
      return false;
    default:
      return state;
  }
};
export default preloaderReducer;
