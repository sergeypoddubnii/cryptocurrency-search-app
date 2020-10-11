import React from 'react';
import { useDispatch } from 'react-redux';
import favCryptoActions from '../../redux/favCryptocurrency/favCryptoActions';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
`;

const Button = styled.button`
  background: #f00;
  border-radius: 50%;
  font-size: 18px;
  line-height: 18px;
  width: 18px;
  padding: 0;
  border: none;
  outline: none;
`;

const Title = styled.h2`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;

const FavoriteListItem = ({ name, symbol, price, id }) => {
  const dispatch = useDispatch();

  const removeFromFavoriteHandler = () =>
    dispatch(favCryptoActions.removeFromFavorite(id));

  return (
    <Li>
      <Title>
        {name}
        &nbsp;
        {symbol}
      </Title>
      <p>
        Price:{price.toFixed(2)}$ &nbsp;
        <Button
          onClick={removeFromFavoriteHandler}
          type="button"
          title="remove from favorite list"
        >
          -
        </Button>
      </p>
    </Li>
  );
};

export default FavoriteListItem;
