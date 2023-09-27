/* eslint-disable import/prefer-default-export */
import { Favorite } from './types/favoriteType';

export const fetchFavorites = async (): Promise<Favorite[]> => {
  const res = await fetch('/api/favorites');
  return res.json();
};

export const fetchFavoritesAdd = async (id: number): Promise<Favorite[]> => {
  const res = await fetch('/api/favorites', {
    method: 'post',
    headers: { 'Content-type': 'Application/json' },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  console.log(data, '===================');

  return data;
};

export const fetchFavoritesDel = async (id: number): Promise<Favorite> => {
  const res = await fetch(`/api/favorites/${id}`, { method: 'delete' });
  const data = await res.json();
  return data;
};
