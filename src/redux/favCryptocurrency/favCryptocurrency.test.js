import favCryptoActions from './favCryptoActions';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './favCyptoTypes';
import favCyptoSelectors from './favCryptoSelectors';
import favCryptoReducer from './favCryptoReducer';

describe('favCryptocurrency', () => {
  describe('favCryptoActions', () => {
    it('addToFavorite should create correct action', () => {
      expect(favCryptoActions.addToFavorite({ id: 1 })).toEqual({
        type: ADD_TO_FAVORITE,
        payload: { crypto: { id: 1 } },
      });
    });

    it('removeFromFavorite should create correct action', () => {
      expect(favCryptoActions.removeFromFavorite(1)).toEqual({
        type: REMOVE_FROM_FAVORITE,
        payload: { id: 1 },
      });
    });
  });

  describe('favCryptoSelectors', () => {
    it('getFavCryptocurrencies should return correct FavCryptocurrencies', () => {
      const state = { favCryptocurrencies: 1 };
      expect(favCyptoSelectors.getFavCryptocurrencies(state)).toEqual(1);
    });
  });

  describe('favCryptoReducer', () => {
    const initialState = [{ id: 1 }, { id: 2 }];

    it('favCryptoReducer should return correct state ADD_TO_FAVORITE', () => {
      const action = {
        type: ADD_TO_FAVORITE,
        payload: { crypto: { id: 3 } },
      };
      const expectedState = [{ id: 1 }, { id: 2 }, { id: 3 }];
      expect(favCryptoReducer(initialState, action)).toEqual(expectedState);
    });

    it('favCryptoReducer should return correct state REMOVE_FROM_FAVORITE', () => {
      const action = {
        type: REMOVE_FROM_FAVORITE,
        payload: { id: 2 },
      };
      const expectedState = [{ id: 1 }];
      expect(favCryptoReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
