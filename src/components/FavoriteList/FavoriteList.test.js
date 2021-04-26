// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
	shallow,
} from 'enzyme';
import FavoriteList from './FavoriteList.tsx';
import testMount from '../../testUtils/testMount';
import testReactReduxHooks from '../../testUtils/testReactReduxHooks';
import testCreateStore from '../../testUtils/testCreateStore';

const fakeCryptoStore = {
	favCryptocurrencies: [
		{
			id: 1, name: 1, symbol: 1, price: 1,
		},
		{
			id: 2, name: 2, symbol: 2, price: 2,
		},
		{
			id: 3, name: 3, symbol: 3, price: 3,
		},
	],
};

describe('FavoriteList component', () => {
	const favoriteList = shallow(<FavoriteList />);
	// mocking store
	const store = testCreateStore(fakeCryptoStore);
	// mock useSelector on mock store
	jest
		.spyOn(testReactReduxHooks, 'useSelector')
		.mockImplementation(() => store.getState());

	it('FavoriteList render properly', () => {
		expect(favoriteList).toMatchSnapshot();
	});

	it('FavoriteList render should render list of FavoriteListItem', () => {
		const favoriteList = testMount(<FavoriteList />, store);
		expect(favoriteList.find('FavoriteListItem')).toHaveLength(3);
	});
});
