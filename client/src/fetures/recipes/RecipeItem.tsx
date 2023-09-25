import React from 'react';
import { Recipe } from './types/Recipestypes';

export default function RecipeItem({
  recipe,
}: {
  recipe: Recipe;
}): JSX.Element {
  return (
    <>
      <div>{recipe.title}</div>
      <img src={recipe.img} alt="" />
      <button type="button">добавить в избраное</button>
    </>
  );
}
