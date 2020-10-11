import mainCryptoTypes from './mainCryptoTypes';

const mainCryptoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_SUCCESS:
      return payload.cryptocurrencies;

    case mainCryptoTypes.FIND_CRYPTOCURRENCY:
      const findedCrypto = state.find(
        crypto =>
          crypto.name.toLowerCase() === payload.value ||
          crypto.symbol.toLowerCase() === payload.value,
      );
      return findedCrypto ? [findedCrypto] : [];

    case mainCryptoTypes.SORT_ASCENDING_PRICE:
      const ascendingPriceState = state.sort((a, b) => {
        return a.price - b.price;
      });
      return [...ascendingPriceState];

    case mainCryptoTypes.SORT_DESCENDING_PRICE:
      const descendingPriceState = state.sort((a, b) => {
        return b.price - a.price;
      });
      return [...descendingPriceState];

    default:
      return state;
  }
};

export default mainCryptoReducer;
