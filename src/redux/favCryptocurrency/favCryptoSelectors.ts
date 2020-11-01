type FavCrypto = { id: string; name: string; symbol: any; price: number };

interface stateType {
  favCryptocurrencies: FavCrypto[];
}

const getFavCryptocurrencies = (state: stateType) => state.favCryptocurrencies;

export default { getFavCryptocurrencies };
