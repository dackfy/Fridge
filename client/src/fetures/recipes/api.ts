/* eslint-disable import/prefer-default-export */
import { Recipe } from './types/Recipestypes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch('/api/recipes');
  console.log(res, '=======================');

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
