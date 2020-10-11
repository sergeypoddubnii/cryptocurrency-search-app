import mainCryptoTypes from '../mainCryptocurrency/mainCryptoTypes';

const preloaderReducer = (state = false, { type }) => {
  switch (type) {
    case mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_START:
      return true;
    case mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_SUCCESS:
    case mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_ERROR:
      return false;
    default:
      return state;
  }
};
export default preloaderReducer;
