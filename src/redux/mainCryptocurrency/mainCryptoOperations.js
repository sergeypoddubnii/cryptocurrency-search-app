import api from '../../services/api';
import mainCryptoActions from './mainCryptoActions';
import { toast } from 'react-toastify';
import mapDataCrypto from '../../helpers/mapDataCrypto';
import toastSetting from '../../services/toastSettings';

const getAllCryptoCurrenciesOperation = () => dispatch => {
  dispatch(mainCryptoActions.getAllCryptoCurrencyStart);
  return api
    .getAllCryptocurrentsAxios()
    .then(({ data }) => {
      const mapedData = mapDataCrypto(data.data);
      dispatch(mainCryptoActions.getAllCryptoCurrencySuccess(mapedData));
    })
    .catch(() => {
      toast.error('HTTP request failed', toastSetting);
      dispatch(mainCryptoActions.getAllCryptoCurrencyError);
    });
};

export default { getAllCryptoCurrenciesOperation };
