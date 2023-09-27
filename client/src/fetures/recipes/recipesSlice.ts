import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecipeState } from './types/RecipesState';
import * as api from './api';
import { Recipe } from './types/Recipestypes';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

const initialState: RecipeState = {
  recipes: [],

  error: undefined,

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


export const { setSearchQuery } = recipesSlice.actions;
export const { clearState } = recipesSlice.actions;
export const { clearSearchQuery } = recipesSlice.actions;

export default recipesSlice.reducer;
