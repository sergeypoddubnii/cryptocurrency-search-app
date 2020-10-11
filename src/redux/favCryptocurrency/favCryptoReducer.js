import favCryptoTypes from './favCyptoTypes';

const favCryptoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case favCryptoTypes.ADD_TO_FAVORITE:
      return [...state, payload.crypto];
    case favCryptoTypes.REMOVE_FROM_FAVORITE:
      return state.filter(crypto => crypto.id !== payload.id);
    default:
      return state;
  }
};

export default favCryptoReducer;
