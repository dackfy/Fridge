/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import productsSlice from './features/products/productsSlice';
import authSlice from './fetures/auth/authSlice';
import usersSlice from './fetures/users/usersSlice';
import recipesSlice from './fetures/recipes/recipesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    recipes: recipesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
