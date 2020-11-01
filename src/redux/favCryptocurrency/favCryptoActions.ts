import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  CryptoCurrency,
  AddToFavoriteAction,
  RemoveFromFavoriteAction,
} from './favCyptoTypes';

const addToFavorite = (crypto: CryptoCurrency): AddToFavoriteAction => {
  return {
    type: ADD_TO_FAVORITE,
    payload: { crypto },
  };
};

const removeFromFavorite = (id: string): RemoveFromFavoriteAction => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: { id },
  };
};

export default {
  addToFavorite,
  removeFromFavorite,
};
