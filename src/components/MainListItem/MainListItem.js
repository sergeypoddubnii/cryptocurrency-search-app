import React from 'react';
import { useDispatch } from 'react-redux';
import favCryptoActions from '../../redux/favCryptocurrency/favCryptoActions';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSetting = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
`;

const Button = styled.button`
  background: #8bff68;
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

const MainListItem = ({ name, symbol, price, id, isFavorite }) => {
  const dispatch = useDispatch();

  const addToFavoriteHandler = () => {
    if (isFavorite) {
      console.log('hi');
      toast.warn(`${name} has already added to favorite`, toastSetting);
      return;
    }
    const crypto = { name, symbol, price, id };
    return dispatch(favCryptoActions.addToFavorite(crypto));
  };

  return (
    <>
      <Li>
        <Title>
          {name}
          &nbsp;
          {symbol}
        </Title>
        <p>
          Price:{price.toFixed(2)}$ &nbsp;
          <Button
            onClick={addToFavoriteHandler}
            type="button"
            title="add to favorite list"
          >
            +
          </Button>
        </p>
      </Li>
    </>
  );
};

export default MainListItem;
