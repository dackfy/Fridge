import React from 'react';
import { Recipe } from '../recipes/types/Recipestypes';
import { useAppDispatch } from '../../store';
import { favoritesDel } from './favoriteSlice';

function FavoritesItem({ recipe }: { recipe: Recipe }): JSX.Element {
  const dispatch = useAppDispatch();
  const delFavoriteFanc = (): void => {
    dispatch(favoritesDel(recipe.id));
  };
  return (
    <>
      <div>{recipe.title}</div>
      <div>{recipe.instruction}</div>
      <img src={recipe.img} alt="" />
      <button type="button" onClick={delFavoriteFanc}>
        {' '}
        delete{' '}
      </button>
    </>
  );
}

export default FavoritesItem;
