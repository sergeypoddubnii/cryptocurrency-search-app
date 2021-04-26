import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mainCryptoActions from './mainCryptoActions.ts';
import {
	GET_ALL_CRYPTOCURRENCY_ERROR,
	GET_ALL_CRYPTOCURRENCY_START,
	GET_ALL_CRYPTOCURRENCY_SUCCESS,
	FIND_CRYPTOCURRENCY,
	// SORT_ASCENDING_PRICE,
	// SORT_DESCENDING_PRICE,
} from './mainCryptoTypes.ts';
import mainCryptoSelectors from './mainCryptoSelectors.ts';
import api from '../../services/api.ts';
import mainCryptoOperations from './mainCryptoOperations.ts';

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
				type: GET_ALL_CRYPTOCURRENCY_SUCCESS,
				payload: { cryptocurrencies: 1 },
			};
			expect(mainCryptoActions.getAllCryptoCurrencySuccess(1)).toEqual(
				expectedAction,
			);
		});

		it('findCrypto should create correct action', () => {
			const expectedAction = {
				type: FIND_CRYPTOCURRENCY,
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
	describe('mainCryproOperations', () => {
		it('should getAllCryptoCurrenciesOperation return action for 500', () => {
			mock.onGet(api.urlTest).reply(500);
			store
				.dispatch(mainCryptoOperations.getAllCryptoCurrenciesOperation())
				.then(() => {
					const expectedActions = [
						{
							type: GET_ALL_CRYPTOCURRENCY_START,
						},
						{
							type: GET_ALL_CRYPTOCURRENCY_ERROR,
						},
					];
					expect(store.getActions()).toEqual(expectedActions);
				});
		});
	});
});
