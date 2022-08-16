import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-3 mt-auto mb-2">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/movie-list">
              Movie List
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Damián Cabrio</p>
      </div>
    </footer>
  );
};

export default Footer;
