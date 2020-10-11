const mapDataCrypto = dataCrypto => {
  return dataCrypto.map(crypto => {
    return {
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      price: crypto.quote.USD.price.toFixed(2),
    };
  });
};

export default mapDataCrypto;
