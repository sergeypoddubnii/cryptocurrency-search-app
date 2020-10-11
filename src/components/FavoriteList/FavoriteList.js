import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import favCryptoSelectors from '../../redux/favCryptocurrency/favCryptoSelectors';
import FavoriteListItem from '../FavoriteListItem/FavoriteListItem';
import withTitleList from '../../hoc/withTitleList';

const hocOptions = { title: 'Your favorite cryptoсurrencies:' };

const FavoriteList = () => {
  const favCryptocurrencies = useSelector(
    favCryptoSelectors.getFavCryptocurrencies,
  );

  const cryptocurrenciesList = useMemo(() => {
    return favCryptocurrencies.map(crypto => {
      return (
        <FavoriteListItem
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.price}
          id={crypto.id}
        />
      );
    });
  }, [favCryptocurrencies]);

  return <ul>{cryptocurrenciesList}</ul>;
};

export default withTitleList(hocOptions)(FavoriteList);
