import { Recipe } from '../../recipes/types/Recipestypes';

export type Favorite = {
  id: number;
  userId: number;
  recipeId: number;
  Recipe: Recipe;
};
