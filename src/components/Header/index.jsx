import { Link } from "react-router-dom";

import logo from "/logo.svg";

/**
 * Header component for the Kasa application.
 *
 * Renders the main header section including the logo and navigation links.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export const Header = () => {
  return (
    <header className="header">
      <h1>Kasa</h1>
      <div className="header__logo">
        <img src={logo} alt="Logo Kasa" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <Link to="/home" className="header__nav-Link">
          Accueil
        </Link>
        <Link to="/about" className="header__nav-Link">
          A propos
        </Link>
      </nav>
    </header>
  );
};
