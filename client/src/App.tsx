/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './fetures/navbar/NavBar';
import Error from './fetures/404/404';
import { useAppDispatch } from './store';
// import * as api from './api';
import RegistrationFormPage from './fetures/auth/RegistrationFormPage';
import AuthorizationFormPage from './fetures/auth/AuthorizationFormPage';
import ChatBot from './fetures/artificial intelligence/СhatBot';
import { authcheckUser } from './fetures/auth/authSlice';
import { usersLoad } from './fetures/users/usersSlice';

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
          <Route path="/add" element={<ChatBot />} />
          <Route path="/check-user" element={<AuthorizationFormPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
