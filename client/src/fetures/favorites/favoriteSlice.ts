import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from './types/favoriteState';
import * as api from './api';
import { Favorite } from './types/favoriteType';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

const initialState: FavoriteState = {
  favorites: [],
  error: undefined,
};

export const favoritesLoad = createAsyncThunk('favorites/load', () =>
  api.fetchFavorites()
);
export const favoritesAdd = createAsyncThunk('favorites/add', (id: number) =>
  api.fetchFavoritesAdd(id)
);
export const favoritesDel = createAsyncThunk('favorites/del', (id: number) =>
  api.fetchFavoritesDel(id)
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(favoritesLoad.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(favoritesLoad.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(favoritesAdd.fulfilled, (state, action) => {
        console.log(action.payload);

        state.favorites = action.payload;
      })
      .addCase(favoritesAdd.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(favoritesDel.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (el) => el.recipeId !== action.payload.id
        );
      })
      .addCase(favoritesDel.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const recipesSelect = (store: RootState): Favorite[] =>
  store.favorites.favorites;

export default favoritesSlice.reducer;
