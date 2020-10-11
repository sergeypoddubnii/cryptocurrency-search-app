import favCyptoTypes from './favCyptoTypes';

const addToFavorite = crypto => {
  return {
    type: favCyptoTypes.ADD_TO_FAVORITE,
    payload: { crypto },
  };
};

const removeFromFavorite = id => {
  return {
    type: favCyptoTypes.REMOVE_FROM_FAVORITE,
    payload: { id },
  };
};

export default {
  addToFavorite,
  removeFromFavorite,
};
