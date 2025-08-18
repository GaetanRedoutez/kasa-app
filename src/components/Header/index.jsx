import { Link } from "react-router-dom";
import logo from "/logo.svg";
import { useTranslation } from "react-i18next";

/**
 * Header component for the Kasa application.
 *
 * Renders the main header section including the logo, language selector and navigation links.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <h1>Kasa</h1>

      <div className="header__logo">
        <img src={logo} alt="Logo Kasa" className="header__logo-img" />
      </div>

      <nav className="header__nav">
        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="header__lang-select"
        >
          <option value="fr">🇫🇷 FR</option>
          <option value="en">🇬🇧 EN</option>
        </select>
        <Link to="/home" className="header__nav-Link">
          {t("home")}
        </Link>
        <Link to="/about" className="header__nav-Link">
          {t("about")}
        </Link>
      </nav>
    </header>
  );
};
