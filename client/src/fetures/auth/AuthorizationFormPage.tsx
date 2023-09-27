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
            <h1>Welcome back &#x1F44F;</h1>
            <p>Please enter your details!</p>
          </div>
          <form onSubmit={handleSubmit} className="my-form">
            <div className="socials-row">
              <a href="#" title="Use Google">
                <img src="assets/google.png" alt="Google" />
                Log in with Google
              </a>
              <a href="#" title="Use Apple">
                <img src="assets/apple.png" alt="Apple" />
                Log in with Apple
              </a>
            </div>
            <div className="divider">
              <div className="divider-line"></div>
              Or
              <div className="divider-line"></div>
            </div>
            <div className="text-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Your Email"
                required
              />
              <img alt="Email Icon" title="Email Icon" src="assets/email.svg" />
            </div>
            <div className="text-field">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Your Password"
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
            <input type="submit" className="my-form__button" value="Login" />
            <div className="my-form__actions">
              <div className="my-form__row">
                <span>Did you forget your password?</span>
                <a href="#" title="Reset Password">
                  Reset Password
                </a>
              </div>
              <div className="my-form__signup">
                <a href="#" title="Create Account">
                  Create Account
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
