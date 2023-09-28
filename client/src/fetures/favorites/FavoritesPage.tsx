import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import FavoritesItem from './FavoritesItem';
import { favoritesLoad } from './favoriteSlice';

function FavoritesPage(): JSX.Element {
  const favorites = useSelector(
    (store: RootState) => store.favorites.favorites
  );

  console.log(favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(favoritesLoad());
  }, []);
  return (
    <>
      {favorites.map((favorite) => (
        <FavoritesItem key={favorite.id} recipe={favorite.Recipe} />
      ))}
    </>
  );
}

export default FavoritesPage;
