import axios from 'axios';

const basic = 'https://pro-api.coinmarketcap.com';
const key = '8a4197ac-656d-49d5-8273-b703b20cf873';
const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
const url = `${proxyUrl}${basic}/v1/cryptocurrency/listings/latest`;
const urlTest = `${proxyUrl}${basic}/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`;

const getAllCryptocurrentsAxios = () => {
  return axios(url, {
    headers: {
      'X-CMC_PRO_API_KEY': key,
    },
  });
};

export default { getAllCryptocurrentsAxios, urlTest };
