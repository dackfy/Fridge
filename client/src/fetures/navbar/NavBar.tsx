import React, { useState } from 'react';
import './styles/style.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchLogOut } from '../users/api';
// import { BsFillCartFill } from 'react-icons/bs';

function NavBar(): JSX.Element {
  const authUser = useSelector((store: RootState) => store.auth.authUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = async (): Promise<void> => {
    const data = await fetchLogOut();
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <header role="banner">
        <nav className="nav__container">
          <ul className={`nav__ul ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active_link' : '')}
                to="/"
              >
                FridgeAI
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active_link' : '')}
                to="/recipes"
              >
                Рецепты
              </NavLink>
            </li>

            {authUser ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'active_link' : ''
                    }
                    to="/add"
                  >
                    RecipeBot
                  </NavLink>
                </li>

                {/* <a href="/busket"> </a>
                <li>Добро пожаловать, {authUser?.name}!</li> */}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'active_link' : ''
                    }
                    to="/favorites"
                  >
                    Мои рецепты
                  </NavLink>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleLogOut();
                    }}
                    href="/"
                  >
                    Выйти
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'active_link' : ''
                    }
                    to="/sign-up"
                  >
                    Регистрация
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'active_link' : ''
                    }
                    to="/check-user"
                  >
                    Авторизация
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="burger-menu" onClick={toggleMobileMenu}>
            ☰
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
