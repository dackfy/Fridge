import React, { useState } from 'react';
import './styles/styleReg.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { signUp } from './authSlice';

function RegistrationFormPage(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(signUp({ name, password, email }));
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <div className="form-side">
        <form onSubmit={handleSubmit} className="my-form">
          <div className="form-welcome-row">
            <h1>Регистрация &#x1F44F;</h1>
          </div>
          {/* <div className="socials-row">
            <a href="#" title="Use Google">
              <img src="./assets/google.png" alt="Google" />
              Use Google
            </a>
            <a href="#" title="Use Apple">
              <img src="./assets/apple.png" alt="Apple" /> Use Apple
            </a>
          </div>
          <div className="divider">
            <div className="divider-line"></div> Or{' '}
            <div className="divider-line"></div>
          </div> */}
          <div className="text-field">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="off"
                placeholder="Ваш Email"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="email">
              Имя:
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                autoComplete="off"
                placeholder="Ваше имя"
                required
              />
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2365 4889 c-746 -72 -1410 -495 -1799 -1145 -225 -376 -337 -814
-323 -1264 11 -365 82 -649 242 -975 125 -254 263 -443 474 -648 375 -364 838
-583 1366 -647 148 -18 450 -14 602 9 265 40 470 104 710 222 673 331 1136
952 1274 1709 27 145 37 496 20 651 -60 525 -281 998 -644 1375 -498 518
-1210 783 -1922 713z m525 -235 c592 -82 1134 -423 1472 -930 442 -661 477
-1508 92 -2204 -37 -67 -85 -145 -110 -178 -1 -2 -53 48 -116 111 -342 339
-770 558 -1258 643 -127 22 -503 30 -641 14 -253 -29 -517 -105 -743 -213
-242 -117 -418 -241 -618 -435 l-127 -124 -51 78 c-125 194 -236 472 -284 714
-162 806 156 1630 817 2124 319 237 706 383 1107 416 123 11 315 4 460 -16z"
                  />
                  <path
                    d="M2445 4250 c-198 -31 -372 -119 -524 -264 -127 -123 -212 -265 -263
-441 -20 -71 -23 -101 -22 -255 0 -161 3 -182 28 -264 57 -189 175 -366 321
-482 294 -236 702 -280 1039 -113 585 291 715 1077 254 1542 -124 125 -284
217 -449 257 -97 24 -292 34 -384 20z"
                  />
                </g>
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="password">
              Пароль:
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="password">
              Подтвердите пароль:
              <input
                id="confirm-password"
                type="password"
                name="confirm-password"
                placeholder="Подтверждение пароля"
                title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <button type="submit" className="my-form__button">
            Войти
          </button>
          <div className="my-form__actions">
            <a href="/check-user" title="Create Account">
              Уже есть аккаунт?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationFormPage;
