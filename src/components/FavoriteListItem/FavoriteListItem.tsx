import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import favCryptoActions from '../../redux/favCryptocurrency/favCryptoActions';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import withWrapperListItem from '../../hoc/withWrapperListItem';

const Button = styled.button`
  background: transparent;
  color: red;
  font-size: 14px;
  line-height: 18px;
  width: 18px;
  padding: 0;
  border: none;
  outline: none;
`;

interface FavoriteListItemProps {
  id: string;
}

const FavoriteListItem: FC<FavoriteListItemProps> = ({ id }) => {
  const dispatch = useDispatch();

  const removeFromFavoriteHandler = () =>
    dispatch(favCryptoActions.removeFromFavorite(id));

  return (
    <Button
      onClick={removeFromFavoriteHandler}
      type="button"
      title="remove from favorite list"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  );
};

export default withWrapperListItem(FavoriteListItem);
