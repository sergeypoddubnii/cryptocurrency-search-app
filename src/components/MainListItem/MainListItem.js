import React from 'react';
import { useDispatch } from 'react-redux';
import favCryptoActions from '../../redux/favCryptocurrency/favCryptoActions';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withWrapperListItem from '../../hoc/withWrapperListItem';
import toastSetting from '../../services/toastSettings';

const Button = styled.button`
  background: transparent;
  color: green;
  font-size: 14px;
  line-height: 18px;
  width: 18px;
  padding: 0;
  border: none;
  outline: none;
`;

const MainListItem = ({ name, symbol, price, id, isFavorite }) => {
  const dispatch = useDispatch();

  const addToFavoriteHandler = () => {
    if (isFavorite) {
      toast.warn(`${name} has already added to favorite`, toastSetting);
      return;
    }
    const crypto = { name, symbol, price, id };
    return dispatch(favCryptoActions.addToFavorite(crypto));
  };

  return (
    <Button
      onClick={addToFavoriteHandler}
      type="button"
      title="add to favorite list"
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
};

export default withWrapperListItem(MainListItem);
