import { Recipe } from './Recipestypes';

export type RecipeActin = {
  type: 'recipes/load';
  payload: Recipe[];
};
