import React, { FC } from 'react';
import Form from '../Form/Form';
import mainCryptoActions from '../../redux/mainCryptocurrency/mainCryptoActions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: #fff;
  outline: none;
  border: 0;
  padding: 5px;
  font-size: 16px;
  margin-right: 40px;
  border-bottom: 1px solid #fff;
  :hover {
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  padding: 20px 50px;
  background-color: #7b25aa;
`;

const Header: FC = () => {
  const dispatch = useDispatch();

  const handlerSortAscendingPrice = () => {
    dispatch(mainCryptoActions.sortAscendingPrice);
  };

  const handlerSortDescendingPrice = () => {
    dispatch(mainCryptoActions.sortDescendingPrice);
  };

  return (
    <HeaderContainer>
      <Form />
      <Button type="button" onClick={handlerSortAscendingPrice}>
        sort ascending price &#8593;
      </Button>
      <Button type="button" onClick={handlerSortDescendingPrice}>
        sort descending price &#8595;
      </Button>
    </HeaderContainer>
  );
};

export default Header;
