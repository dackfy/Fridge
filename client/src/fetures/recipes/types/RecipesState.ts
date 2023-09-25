import { Recipe } from './Recipestypes';

export type RecipeState = {
  recipes: Recipe[];
  searchQuery: string;
};
