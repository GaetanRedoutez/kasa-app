import { useTranslation } from "react-i18next";
import logo from "/logo-white.svg";

/**
 * Footer component displays the application's footer section,
 * including the logo and copyright.
 *
 * @component
 * @returns {JSX.Element} The rendered footer element.
 */
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="A Logo" className="footer__logo-img" />
      </div>
      <div className="footer__text">© 2020 Kasa. {t("copyright")} </div>
    </footer>
  );
};
