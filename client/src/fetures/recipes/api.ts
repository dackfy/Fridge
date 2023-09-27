/* eslint-disable import/prefer-default-export */
import { Recipe, RecipeWithOutId } from './types/Recipestypes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch('/api/recipes');
  return res.json();
};
// export const initProductsFetch = async (title: string): Promise<Recipe[]> => {
//   const res = await fetch(`/api/category/${title}`);
//   const data = await res.json();
//   return data;
// };
// export const initOneProductFetch = async ({
//   title,
//   idProd,
// }: {
//   title: string;
//   idProd: string;
// }): Promise<Recipe> => {
//   const res = await fetch(`/api/category/${title}/${idProd}`);
//   const data = await res.json();
//   return data;
// };
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
