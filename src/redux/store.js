import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer.ts';

const moviesPersistConfig = {
	key: 'favCryptocurrencies',
	storage,
	whitelist: ['favCryptocurrencies'],
};

const persistedReducer = persistReducer(moviesPersistConfig, rootReducer);

const middleware = [thunk];
const enhuncer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhuncer);
export const persistor = persistStore(store);
