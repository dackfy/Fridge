import React from 'react';
import { useSelector } from 'react-redux';

import RecipeItem from './RecipeItem';
import './styles/style.scss';
import { recipesSelect } from './recipesSlice';

export default function RecipeList(): JSX.Element {
  const recipes = useSelector(recipesSelect);

  return (
    <div className="recipes__container">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
