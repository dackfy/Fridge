/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/fetures/navbar/NavBar';
import Error from '../src/fetures/404/404';
import { useAppDispatch } from '../../client/src/store';
import * as api from './api';
import RegistrationFormPage from '../src/fetures/auth/RegistrationFormPage';
import AuthorizationFormPage from '../src/fetures/auth/AuthorizationFormPage';

import { authcheckUser } from '../src/fetures/auth/authSlice';
import { usersLoad } from '../src/fetures/users/usersSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersLoad());
    dispatch(authcheckUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/sign-up" element={<RegistrationFormPage />} />
          <Route path="/check-user" element={<AuthorizationFormPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
