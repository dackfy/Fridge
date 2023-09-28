/* eslint-disable import/prefer-default-export */
import { Recipe, RecipeWithOutId } from './types/Recipestypes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch('/api/recipes');
  return res.json();
};
export const fetchAddRecipe = async (
  recipe: RecipeWithOutId
): Promise<Recipe> => {
  const res = await fetch('/api/recipes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
