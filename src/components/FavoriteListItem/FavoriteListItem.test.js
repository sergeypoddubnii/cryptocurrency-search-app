import React from 'react';
import { shallow } from 'enzyme';
import FavoriteListItem from './FavoriteListItem.tsx';
import testCreateStore from '../../testUtils/testCreateStore';
import testMount from '../../testUtils/testMount';
import favCryptoActions from '../../redux/favCryptocurrency/favCryptoActions.ts';

describe('FavoriteListItem', () => {
	const favoriteListItem = shallow(<FavoriteListItem />);
	it('should render properly', () => {
		expect(favoriteListItem).toMatchSnapshot();
	});
	it('should dispatch the correct action on removeFromFavoriteHandler click', () => {
		const store = testCreateStore();
		store.dispatch = jest.fn();
		const favoriteListItemMount = testMount(<FavoriteListItem />, store);

		favoriteListItemMount.find('button').simulate('click');
		expect(store.dispatch).toHaveBeenCalledWith(
			favCryptoActions.removeFromFavorite(),
		);
	});
});
