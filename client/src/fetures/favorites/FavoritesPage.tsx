import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import FavoritesItem from './FavoritesItem';

function FavoritesPage(): JSX.Element {
  const favorites = useSelector(
    (store: RootState) => store.favorites.favorites
  );

  console.log(favorites);

  return (
    <>
      {favorites.map((favorite) => (
        <FavoritesItem key={favorite.id} recipe={favorite.Recipe} />
      ))}
    </>
  );
}

export default FavoritesPage;
