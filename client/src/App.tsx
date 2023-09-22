/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProductsPage from '../features/products/ProductsPage';
import NavBar from '../src/fetures/navbar/NavBar';
// import ProductPage from '../features/products/ProductPage';
// import '../features/products/styles/style.scss';
import Error from '../src/fetures/404/404';
import { useAppDispatch } from '../../client/src/store';
import * as api from './api';
import RegistrationFormPage from '../src/fetures/auth/RegistrationFormPage';
import AuthorizationFormPage from '../src/fetures/auth/AuthorizationFormPage';

import { authcheckUser } from '../src/fetures/auth/authSlice';
import { usersLoad } from '../src/fetures/users/usersSlice';
// import BasketPage from '../features/products/BasketPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // const loadProducts = async (): Promise<void> => {
  //   const data = await api.fetchProducts();
  //   dispatch({ type: 'products/load', payload: data });
  // };

  // const loadUsers = async (): Promise<void> => {
  //   const data = await api.fetchUsers();
  //   dispatch({ type: 'users/load', payload: data });
  // };

  // const checkUser = async (e): Promise<void> => {
  //   const data = await api.fetchCheckUser();
  //   if (data) {
  //     dispatch({ type: 'auth/check', payload: data });
  //   }
  // };

  useEffect(() => {
    // dispatch(loadProducts());
    dispatch(usersLoad());
    dispatch(authcheckUser());
    // dispatch(loadBasket())
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* <Route path="/" element={<Callback />} /> */}
          {/* <Route path="/" element={<ProductsPage />} /> */}
          {/* <Route path="/products/:productId" element={<ProductPage />} /> */}
          <Route path="/sign-up" element={<RegistrationFormPage />} />
          <Route path="/check-user" element={<AuthorizationFormPage />} />
          {/* <Route path="/busket" element={<BasketPage />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
