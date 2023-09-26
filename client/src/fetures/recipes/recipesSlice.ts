import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecipeState } from './types/RecipesState';
import * as api from './api';
import { Recipe } from './types/Recipestypes';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

const initialState: RecipeState = {
  recipes: [],
  error: undefined,
};

export const recipesLoad = createAsyncThunk('recipes/load', () =>
  api.fetchRecipes()
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipesLoad.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })

      .addCase(recipesLoad.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const recipesSelect = (store: RootState): Recipe[] =>
  store.recipes.recipes;

export default recipesSlice.reducer;
