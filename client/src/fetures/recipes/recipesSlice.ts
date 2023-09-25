import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import { RecipeState } from './types/RecipesState';
import * as api from './api';

const initialState: RecipeState = {
  recipes: [],
};

export const recipesLoad = createAsyncThunk('recipes/load', () =>
  api.fetchRecipes()
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(recipesLoad.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export default recipesSlice.reducer;
