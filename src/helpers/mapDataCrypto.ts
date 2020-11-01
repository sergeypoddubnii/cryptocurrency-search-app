interface DataCryptoType {
  id: string;
  name: string;
  symbol: any;
  quote: {
    USD: {
      price: number;
    };
  };
}

const mapDataCrypto = (dataCrypto: DataCryptoType[]) => {
  return dataCrypto.map((crypto: DataCryptoType) => {
    return {
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      price: crypto.quote.USD.price.toFixed(2),
    };
  });
};

export default mapDataCrypto;
