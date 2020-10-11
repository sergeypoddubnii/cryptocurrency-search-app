import React from 'react';
import Form from '../Form/Form';
import mainCryptoActions from '../../redux/mainCryptocurrency/mainCryptoActions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0;
`;

const Header = () => {
  const dispatch = useDispatch();
  const handlerSortAscendingPrice = () => {
    dispatch(mainCryptoActions.sortAscendingPrice);
  };
  const handlerSortDescendingPrice = () => {
    dispatch(mainCryptoActions.sortDescendingPrice);
  };
  return (
    <header>
      <Form />
      <Button type="button" onClick={handlerSortAscendingPrice}>
        sort ascending price
      </Button>
      <Button type="button" onClick={handlerSortDescendingPrice}>
        sort descending price
      </Button>
    </header>
  );
};

export default Header;
