import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import FavoritesItem from './FavoritesItem';
import { favoritesLoad } from './favoriteSlice';
import './styles/style.css';

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
    <div className="favoriteEmpty">
      {favorites.length > 0 ? (
        <div>
          {favorites.map((favorite) => (
            <FavoritesItem key={favorite.id} recipe={favorite.Recipe} />
          ))}
        </div>
      ) : (
        <div className="hed">
          <h1>Добавьте рецепт!</h1>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
