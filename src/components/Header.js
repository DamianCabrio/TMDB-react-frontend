import { Link } from 'react-router-dom';

import { SearchBox } from './';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div className="justify-content-start">
            <Link className="navbar-brand d-none d-md-inline" to="/">
              AlkeFilm
            </Link>
            <div className="mr-auto d-inline-block" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favorite-movies">
                    Favorite Movies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <SearchBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;
