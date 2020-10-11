import api from '../../services/api';
import mainCryptoActions from './mainCryptoActions';

const getAllCryptoCurrenciesOperation = () => dispatch => {
  return api.getAllCryptocurrentsAxios().then(({ data }) => {
    console.log(data.data);
    const mapData = data.data.map(crypto => {
      return {
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price,
      };
    });
    dispatch(mainCryptoActions.getAllCryptoCurrency(mapData));
  });
};

export default { getAllCryptoCurrenciesOperation };
