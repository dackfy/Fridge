export default function Header(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="label-div">
          <label>Холодильник</label>
          <img src="" alt="лого" />
        </div>
        <div className="navigation-div">
          <h1 className="reg">Зарегаться</h1>
          <h1 className="login">Войти</h1>
        </div>
      </nav>
    </>
  );
}
