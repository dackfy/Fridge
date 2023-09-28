import React, { useState } from 'react';
import './styles/styleLog.css';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store';
import { checkAuto } from './authSlice';

function AuthorizationFormPage(): JSX.Element {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(checkAuto({ password, email }));
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-side">
        <div className="my-form__wrapper">
          <div className="login-welcome-row">
            <h1>С возвращением &#x1F44F;</h1>
            <p>Пожалуйста, введите свои данные!</p>
          </div>
          <form onSubmit={handleSubmit} className="my-form">
            <div className="text-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Ваш Email"
                required
              />
              <img alt="Email Icon" title="Email Icon" src="assets/email.svg" />
            </div>
            <div className="text-field">
              <label htmlFor="password">Пароль:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Ваш пароль"
                title="Minimum 6 characters at 
                            least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
              />
              <img
                alt="Password Icon"
                title="Password Icon"
                src="assets/password.svg"
              />
            </div>
            <input type="submit" className="my-form__button" value="Войти" />
            <div className="my-form__actions">
              <div className="my-form__signup">
                <p>Нет аккаунта?</p>
                <a href="/sign-up" title="Create Account">
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationFormPage;
