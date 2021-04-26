import React from 'react';
import Form from './Form.tsx';
import testCreateStore from '../../testUtils/testCreateStore';
import testMount from '../../testUtils/testMount';
import mainCryptoAction from '../../redux/mainCryptocurrency/mainCryptoActions.ts';
// import testReactReduxHooks from '../../testUtils/testReactReduxHooks';

describe('Form', () => {
	let formMount;
	const store = testCreateStore();
	//   jest
	//     .spyOn(testReactReduxHooks, 'useDispatch')
	//     .mockImplementation(() => store.dispatch);

	beforeEach(() => {
		store.dispatch = jest.fn();
		formMount = testMount(<Form />, store);
	});

	it('should change value onChange event', () => {
		let input = formMount.find('input[name="search"]');
		input.simulate('change', { target: { value: '123', name: 'search' } });
		// update after changing state
		formMount.update();
		// find same input witn NEW value after changing
		input = formMount.find('input[name="search"]');
		const { value } = input.props();
		expect(value).toBe('123');
	});

	it('should dispatch correct action', () => {
		formMount.find('form').simulate('submit');
		expect(store.dispatch).toHaveBeenCalledWith(
			mainCryptoAction.findCrypto(''),
		);
	});
});
