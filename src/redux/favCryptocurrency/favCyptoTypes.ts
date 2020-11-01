export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: any;
  price: number;
}

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export interface AddToFavoriteAction {
  type: typeof ADD_TO_FAVORITE;
  payload: {
    crypto: CryptoCurrency;
  };
}

export interface RemoveFromFavoriteAction {
  type: typeof REMOVE_FROM_FAVORITE;
  payload: {
    id: string;
  };
}

export type FavCryptoActionsTypes =
  | AddToFavoriteAction
  | RemoveFromFavoriteAction;
