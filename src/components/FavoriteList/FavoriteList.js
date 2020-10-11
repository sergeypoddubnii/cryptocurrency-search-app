import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import favCryptoSelectors from '../../redux/favCryptocurrency/favCryptoSelectors';
import FavoriteListItem from '../FavoriteListItem/FavoriteListItem';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  padding: 0;
  margin-bottom: 10px;
`;

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

  console.log(favCryptocurrencies);
  return (
    <div>
      <Title>Your favorite list</Title>
      <ul>{cryptocurrenciesList}</ul>
    </div>
  );
};

export default FavoriteList;
