import preloaderReducer from './preloaderReducer';
import preloaderSelectors from './preloaderSelectors';
import {
  GET_ALL_CRYPTOCURRENCY_ERROR,
  GET_ALL_CRYPTOCURRENCY_SUCCESS,
  GET_ALL_CRYPTOCURRENCY_START,
} from '../mainCryptocurrency/mainCryptoTypes';

describe('preloader', () => {
  describe('preloaderReducer', () => {
    it('preloaderReducer should return correct state GET_ALL_CRYPTOCURRENCY_START', () => {
      expect(
        preloaderReducer(false, {
          type: GET_ALL_CRYPTOCURRENCY_START,
        }),
      ).toBe(true);
    });
    it('preloaderReducer should return correct state GET_ALL_CRYPTOCURRENCY_SUCCESS', () => {
      expect(
        preloaderReducer(true, {
          type: GET_ALL_CRYPTOCURRENCY_SUCCESS,
        }),
      ).toBe(false);
    });
    it('preloaderReducer should return correct state GET_ALL_CRYPTOCURRENCY_ERROR', () => {
      expect(
        preloaderReducer(true, {
          type: GET_ALL_CRYPTOCURRENCY_ERROR,
        }),
      ).toBe(false);
    });
  });
  describe('preloaderSelectors', () => {
    it('getIsLoading should return correct value', () => {
      const state = { isLoading: true };
      expect(preloaderSelectors.getIsLoading(state)).toBe(true);
    });
  });
});
