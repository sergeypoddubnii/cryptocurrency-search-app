import React from 'react';
import { shallow } from 'enzyme';
import MainListItem from './MainListItem.tsx';

describe('MainListItem', () => {
	const favoriteListItem = shallow(<MainListItem />);
	it('should render properly', () => {
		expect(favoriteListItem).toMatchSnapshot();
	});
});
