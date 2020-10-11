import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mainCryptoActions from './mainCryptoActions';
import mainCryptoTypes from './mainCryptoTypes';
import mainCryptoSelectors from './mainCryptoSelectors';
import mainCryptoReducer from './mainCryptoReducer';
import mainCryproOperations from './mainCryptoOperations';
import api from '../../services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('mainCryptocurrency', () => {
  beforeEach(() => {
    store.clearActions();
    mock.reset();
  });
  describe('mainCryptoActions', () => {
    it('getAllCryptoCurrencySuccess should create correct action', () => {
      const expectedAction = {
        type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_SUCCESS,
        payload: { cryptocurrencies: 1 },
      };
      expect(mainCryptoActions.getAllCryptoCurrencySuccess(1)).toEqual(
        expectedAction,
      );
    });

    it('findCrypto should create correct action', () => {
      const expectedAction = {
        type: mainCryptoTypes.FIND_CRYPTOCURRENCY,
        payload: { value: 1 },
      };
      expect(mainCryptoActions.findCrypto(1)).toEqual(expectedAction);
    });
  });

  describe('mainCryptoSelectors', () => {
    it('getAllCryptocurrencies should return correct value', () => {
      const state = { mainCryptocurrencies: 1 };
      expect(mainCryptoSelectors.getAllCryptocurrencies(state)).toBe(1);
    });
  });
  describe('mainCryproReducer', () => {
    const initialState = [
      { id: 1, name: 'hello', symbol: 'h', price: 1 },
      { id: 3, name: 'hii', symbol: 'yi', price: 3 },
      { id: 2, name: 'hi', symbol: 'y', price: 2 },
    ];
    it('GET_ALL_CRYPTOCURRENCY_SUCCESS should return correct state', () => {
      const action = {
        type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_SUCCESS,
        payload: { cryptocurrencies: [1, 2, 3] },
      };
      expect(mainCryptoReducer([], action)).toEqual([1, 2, 3]);
    });
    it('FIND_CRYPTOCURRENCY should return correct state', () => {
      const action = {
        type: mainCryptoTypes.FIND_CRYPTOCURRENCY,
        payload: { value: 'hi' },
      };

      const expectedState = [{ id: 2, name: 'hi', symbol: 'y', price: 2 }];

      expect(mainCryptoReducer(initialState, action)).toEqual(expectedState);
    });

    it('SORT_ASCENDING_PRICE should return correct state', () => {
      const action = {
        type: mainCryptoTypes.SORT_ASCENDING_PRICE,
      };

      const expectedState = [
        { id: 1, name: 'hello', symbol: 'h', price: 1 },
        { id: 2, name: 'hi', symbol: 'y', price: 2 },
        { id: 3, name: 'hii', symbol: 'yi', price: 3 },
      ];

      expect(mainCryptoReducer(initialState, action)).toEqual(expectedState);
    });
    it('SORT_DESCENDING_PRICE should return correct state', () => {
      const action = {
        type: mainCryptoTypes.SORT_DESCENDING_PRICE,
      };

      const expectedState = [
        { id: 3, name: 'hii', symbol: 'yi', price: 3 },
        { id: 2, name: 'hi', symbol: 'y', price: 2 },
        { id: 1, name: 'hello', symbol: 'h', price: 1 },
      ];

      expect(mainCryptoReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('mainCryproOperations', () => {
    it('should getAllCryptoCurrenciesOperation return action for 500', () => {
      mock.onGet(api.urlTest).reply(500);
      store
        .dispatch(mainCryproOperations.getAllCryptoCurrenciesOperation())
        .then(() => {
          const expectedActions = [
            {
              type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_START,
            },
            {
              type: mainCryptoTypes.GET_ALL_CRYPTOCURRENCY_ERROR,
            },
          ];
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
