import { Link } from "react-router-dom";

/**
 * Error page component displaying a 404 message.
 *
 * Renders a user-friendly message when a requested page is not found,
 * along with a link to return to the homepage.
 *
 * @component
 * @returns {JSX.Element} The rendered error page.
 */
export const Error = () => {
  return (
    <div className="errorPage">
      <h2 className="errorPage__h2">404</h2>
      <p className="errorPage__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorPage__Link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};
