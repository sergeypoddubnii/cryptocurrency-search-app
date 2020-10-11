import mainCryptoReducer from './mainCryptocurrency/mainCryptoReducer';
import favCryptoReducer from './favCryptocurrency/favCryptoReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  mainCryptocurrencies: mainCryptoReducer,
  favCryptocurrencies: favCryptoReducer,
});
