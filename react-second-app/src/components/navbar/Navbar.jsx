import "./index.css";

const Navbar = () => {
  return (
    <header className="header-main">
      <div className="container header-wrapper">
        <div className="header-logo">
          <img
            src="https://assets.codepen.io/3/kiwi.svg"
            alt="logo"
            width="200px"
            height="100px"
          />
        </div>

        <div className="header-menu">
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="/" title="home">
                  Home
                </a>
              </li>
              <li>
                <a href="/" title="about us">
                  About us
                </a>
              </li>
              <li>
                <a href="/" title="contatti">
                  Contatti
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
