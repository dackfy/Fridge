import React from 'react';
import './failStyles.css';

function Error(): JSX.Element {
  const enlargedFourStyle = {
    fontSize: '40rem',
    margin: '5 auto',
  };

  const customFontStyle = {
    fontSize: '3rem',
    fontFamily: 'YourCustomFont',
  };

  const redirectToRecipes = () => {
    window.location.href = '/add';
  };

  return (
    <>
      <div className="header" style={customFontStyle}>
        Такой страницы не существует!
      </div>
      <div className="containerFail">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '160px',
            height: '170px',
          }}
        >
          <div
            style={{
              animation: 'moveLeftRight 2s infinite',
              ...enlargedFourStyle,
            }}
          >
            4
          </div>

          <img
            style={{ width: '450px', animation: 'moveLeftRight 2s infinite' }}
            src="https://i.gifer.com/origin/fa/fad0e9b11d224f54cf62240fac2851eb_w200.gif"
            alt="Ошибка"
          />

          <div
            style={{
              animation: 'moveLeftRight 2s infinite',
              ...enlargedFourStyle,
            }}
          >
            4
          </div>
        </div>
        <button className="homeBtn" onClick={redirectToRecipes}>
          Перейти к рецептам
        </button>
      </div>
    </>
  );
}

export default Error;
