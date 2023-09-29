import React from 'react';

function Error(): JSX.Element {
  const enlargedFourStyle = {
    fontSize: '40rem',
    margin: '0 auto',
  };

  const customFontStyle = {
    fontSize: '3rem',
    fontFamily: 'YourCustomFont',
  };

  const redirectToRecipes = () => {
    window.location.href = '/add';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={customFontStyle}>Такой страницы не существует</div>

      <button
        onClick={redirectToRecipes}
        style={{
          fontSize: '2rem',
          marginTop: '1rem',
          borderRadius: '12px',
          color: '246, 141, 4',
        }}
      >
        Перейти к рецептам
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1rem',
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
    </div>
  );
}

export default Error;
