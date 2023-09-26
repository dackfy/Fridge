/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './fetures/auth/authSlice';
import usersSlice from './fetures/users/usersSlice';
// eslint-disable-next-line import/no-cycle
import recipesSlice from './fetures/recipes/recipesSlice';
// eslint-disable-next-line import/no-cycle
import favoriteSlice from './fetures/favorites/favoriteSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    recipes: recipesSlice,
    favorites: favoriteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
