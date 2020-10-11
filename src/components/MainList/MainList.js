import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainCryptoOperations from '../../redux/mainCryptocurrency/mainCryptoOperations';
import mainCryptoSelectors from '../../redux/mainCryptocurrency/mainCryptoSelectors';
import favCryptoSelectors from '../../redux/favCryptocurrency/favCryptoSelectors';
import MainListItem from '../MainListItem/MainListItem';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  padding: 0;
  margin-bottom: 10px;
`;

const MainList = () => {
  const dispatch = useDispatch();

  const allCryptoCurrencies = useSelector(
    mainCryptoSelectors.getAllCryptocurrencies,
  );

  const favCryptocurrencies = useSelector(
    favCryptoSelectors.getFavCryptocurrencies,
  );

  useEffect(() => {
    dispatch(mainCryptoOperations.getAllCryptoCurrenciesOperation());
  }, [dispatch]);

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
    <div>
      <Title>Top cryptocurrencies</Title>
      <ul>{allCryptoCurrencies.length !== 0 ? cryptocurrenciesList : null}</ul>
    </div>
  );
};

export default MainList;
