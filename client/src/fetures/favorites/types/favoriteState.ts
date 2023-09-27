import { Favorite } from './favoriteType';

export type FavoriteState = {
  favorites: Favorite[];

  error: undefined | string;
};
