import { CryptoCurrencyType } from './mainCryptoTypes';

interface StateType {
  mainCryptocurrencies: CryptoCurrencyType[];
}

const getAllCryptocurrencies = (state: StateType): CryptoCurrencyType[] =>
  state.mainCryptocurrencies;

export default {
  getAllCryptocurrencies,
};
