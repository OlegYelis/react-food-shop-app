import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper container">
        <Link className="brand-logo" to="/">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
