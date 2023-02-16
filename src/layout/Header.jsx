export const Header = () => {
  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper container">
        <p className="brand-logo">React movies</p>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/OlegYelis/react-food-shop-app"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/OlegYelis/react-food-shop-app"
              target="_blank"
              rel="noreferrer"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
