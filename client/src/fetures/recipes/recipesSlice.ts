import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import { RecipeState } from './types/RecipesState';
import * as api from './api';

// const initialState: RecipeState = {
//   recipes: [],
// };

const recipesLoad = createAsyncThunk('recipes/load', () => api.fetchRecipes());

// const recipesSlice = createSlice({
//   name: 'recipes',
//   initialState,
//   reducers: {},
// });

export default recipesLoad;
