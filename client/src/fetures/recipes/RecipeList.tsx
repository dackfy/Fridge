import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import RecipeItem from './RecipeItem';

export default function RecipeList(): JSX.Element {
  const recipes = useSelector((store: RootState) => store.recipes.recipes);

  return (
    <div className="recipes__container">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
