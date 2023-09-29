import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { recipesSelect } from './recipesSlice';
import { useAppDispatch } from '../../store';
import { favoritesAdd } from '../favorites/favoriteSlice';
import { Recipe } from './types/Recipestypes';

export default function RecipePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const recipes = useSelector(recipesSelect);
  let recipe: Recipe | undefined;

  if (id) {
    recipe = recipes.find((el) => el.id === Number(id));
  }

  const addtoFavorite = (): void => {
    if (recipe) {
      dispatch(favoritesAdd(recipe.id));
    }
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
              onClick={addtoFavorite}
              className="favorite-button"
            >
              Добавить в избранное
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
