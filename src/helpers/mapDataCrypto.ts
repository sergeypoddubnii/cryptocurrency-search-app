interface DataCryptoType {
  id: any;
  name: string;
  symbol: any;
  quote: {
    USD: {
      price: any;
    };
  };
}

const mapDataCrypto = (dataCrypto: DataCryptoType[]) => {
  console.log(dataCrypto);
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
