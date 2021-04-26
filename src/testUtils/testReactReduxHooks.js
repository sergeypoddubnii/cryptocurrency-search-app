import { useSelector, useDispatch } from 'react-redux';

const testReactReduxHooks = {
	useSelector: (state) => useSelector(state),
	useDispatch: () => useDispatch(),
};

export default testReactReduxHooks;
