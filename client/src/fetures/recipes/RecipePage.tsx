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
  console.log(recipe, '-----------------');
  const addtoFavorite = (): void => {
    if (recipe) {
      dispatch(favoritesAdd(recipe.id));
      console.log(recipe.id);
    }
  };

  return (
    <>
      <div>{recipe?.title}</div>
      <img src={recipe?.img} alt="rerere" />
      <div>{recipe?.ingridients}</div>
      <div>{recipe?.instruction}</div>
      <button type="button" onClick={addtoFavorite}>
        В избранное
      </button>
    </>
  );
}
