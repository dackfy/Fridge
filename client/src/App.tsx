/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './fetures/navbar/NavBar';
import Error from './fetures/404/404';
import { useAppDispatch } from './store';
import RegistrationFormPage from './fetures/auth/RegistrationFormPage';
import AuthorizationFormPage from './fetures/auth/AuthorizationFormPage';
import ChatBot from './fetures/artificial intelligence/СhatBot';
import ReceptSlaid from './fetures/recipes/ReceptSlaid';

import { authcheckUser } from './fetures/auth/authSlice';
import { usersLoad } from './fetures/users/usersSlice';
import RecipeList from './fetures/recipes/RecipeList';
import { recipesLoad } from './fetures/recipes/recipesSlice';
import RecipePage from './fetures/recipes/RecipePage';
import { favoritesLoad } from './fetures/favorites/favoriteSlice';
import FavoritesPage from './fetures/favorites/FavoritesPage';
import Layout from './fetures/layout/Layout';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersLoad());
    dispatch(authcheckUser());
    dispatch(recipesLoad());
    dispatch(favoritesLoad());
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<ReceptSlaid />} />

        <Route path="/" element={<Layout />}>

          <Route path="/sign-up" element={<RegistrationFormPage />} />
          <Route path="/add" element={<ChatBot />} />
          <Route path="/check-user" element={<AuthorizationFormPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="*" element={<Error />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
