import React, { useState } from 'react';
import './styles/styles.scss';
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
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form__body">
        <label>
          Ваш email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="text"
          />
        </label>
        <label>
          Ваш пароль
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text"
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default AuthorizationFormPage;
