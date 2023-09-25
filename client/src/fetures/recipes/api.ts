/* eslint-disable import/prefer-default-export */
import { Recipe } from './types/Recipestypes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch('/api/recipes');
  console.log(res, '=======================');

  return res.json();
};
