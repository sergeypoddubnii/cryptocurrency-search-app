// import preloaderReducer from './preloaderReducer';
import preloaderSelectors from './preloaderSelectors';
import {
  GET_ALL_CRYPTOCURRENCY_ERROR,
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  GET_ALL_CRYPTOCURRENCY_START,
} from '../mainCryptocurrency/mainCryptoTypes';

describe('preloader', () => {
  describe('preloaderSelectors', () => {
    it('getIsLoading should return correct value', () => {
      const state = { isLoading: true };
      expect(preloaderSelectors.getIsLoading(state)).toBe(true);
    });
  });
});
