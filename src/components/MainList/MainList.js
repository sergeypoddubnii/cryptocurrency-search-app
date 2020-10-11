import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainCryptoOperations from '../../redux/mainCryptocurrency/mainCryptoOperations';
import mainCryptoSelectors from '../../redux/mainCryptocurrency/mainCryptoSelectors';
import favCryptoSelectors from '../../redux/favCryptocurrency/favCryptoSelectors';
import MainListItem from '../MainListItem/MainListItem';
import withTitleList from '../../hoc/withTitleList';

const hocOptions = { title: 'Top cryptorurrencies:' };

const MainList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainCryptoOperations.getAllCryptoCurrenciesOperation());
  }, [dispatch]);

  const allCryptoCurrencies = useSelector(
    mainCryptoSelectors.getAllCryptocurrencies,
  );

  const favCryptocurrencies = useSelector(
    favCryptoSelectors.getFavCryptocurrencies,
  );

  const cryptocurrenciesList = useMemo(() => {
    return (
      allCryptoCurrencies.length !== 0 &&
      allCryptoCurrencies.map(crypto => {
        const isFavorite = !!favCryptocurrencies.find(
          favCrypto => favCrypto.id === crypto.id,
        );
        return (
          <MainListItem
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            price={crypto.price}
            id={crypto.id}
            isFavorite={isFavorite}
          />
        );
      })
    );
  }, [allCryptoCurrencies, favCryptocurrencies]);

  return (
    <ul>
      {allCryptoCurrencies.length !== 0
        ? cryptocurrenciesList
        : 'no results...'}
    </ul>
  );
};

export default withTitleList(hocOptions)(MainList);
