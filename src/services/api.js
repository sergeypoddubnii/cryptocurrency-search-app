import axios from 'axios';
const basic = 'https://pro-api.coinmarketcap.com';
const key = '8a4197ac-656d-49d5-8273-b703b20cf873';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = `${proxyUrl}${basic}/v1/cryptocurrency/listings/latest`;

const getAllCryptocurrentsAxios = () => {
  return axios(url, {
    headers: {
      'X-CMC_PRO_API_KEY': key,
    },
  });
};

export default { getAllCryptocurrentsAxios };
