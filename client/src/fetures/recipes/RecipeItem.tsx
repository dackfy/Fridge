import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from './types/Recipestypes';

export default function RecipeItem({
  recipe,
}: {
  recipe: Recipe;
}): JSX.Element {
  return (
    <>
      <div>{recipe.title}</div>
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.img} alt="картинка" style={{ width: '30%' }} />
      </Link>
    </>
  );
}
