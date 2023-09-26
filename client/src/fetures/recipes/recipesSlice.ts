import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import { RecipeState } from './types/RecipesState';
import * as api from './api';

const initialState: RecipeState = {
  recipes: [],
  searchQuery: '',
};

export const recipesLoad = createAsyncThunk('recipes/load', () =>
  api.fetchRecipes()
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearState: (state) => {
      state.recipes = [];
    },
    clearSearchQuery: (state) => {
      state.searchQuery = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(recipesLoad.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});
export const { setSearchQuery } = recipesSlice.actions;
export const { clearState } = recipesSlice.actions;
export const { clearSearchQuery } = recipesSlice.actions;
export default recipesSlice.reducer;
