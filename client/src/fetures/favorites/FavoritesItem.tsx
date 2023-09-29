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
      <div className="recipePageContainer">
        <div className="recipe-card">
          <img className="recipe-image" src={recipe?.img} alt="imgCard" />
          <div className="recipeText">
            <h2 className="recipe-title">{recipe?.title}</h2>
            <p className="recipe-ingredients">
              Ингридиенты: {recipe?.ingridients}
            </p>
            <p className="recipe-instructions">
              Инструкция: {recipe?.instruction}
            </p>
            <button
              type="button"
              onClick={delFavoriteFanc}
              className="delete-button"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesItem;
