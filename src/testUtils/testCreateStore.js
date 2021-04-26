import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testCreateStore = (store = {}) => configureStore([thunk])({ ...store });

export default testCreateStore;
