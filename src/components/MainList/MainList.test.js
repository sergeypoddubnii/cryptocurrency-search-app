import React from 'react';
import { shallow } from 'enzyme';
import MainList from './MainList.tsx';

describe('MainList', () => {
	let mainList;
	beforeEach(() => {
		// eslint-disable-next-line no-undef
		mainList = shallow(<MainList />);
	});
	it('should render correct', () => {
		expect(mainList).toMatchSnapshot();
	});
});
