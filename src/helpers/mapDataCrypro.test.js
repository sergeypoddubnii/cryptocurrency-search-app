import mapDataCrypro from './mapDataCrypto';

describe('helpers', () => {
  it('mapDataCrypro should return correct array ', () => {
    const data = [
      { id: 5, name: 'hi', symbol: 'hi', quote: { USD: { price: 5 } } },
    ];
    const expectedData = [{ id: 5, name: 'hi', symbol: 'hi', price: '5.00' }];

    expect(mapDataCrypro(data)).toEqual(expectedData);
  });
});
