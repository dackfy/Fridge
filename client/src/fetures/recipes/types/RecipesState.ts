import { Recipe } from './Recipestypes';

export type RecipeState = {
  recipes: Recipe[];

  error: string | undefined;

  searchQuery: string;

};
