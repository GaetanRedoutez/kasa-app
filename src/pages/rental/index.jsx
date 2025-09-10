import { useLoaderData } from "react-router-dom";
import { RentalContent } from "../../components/RentalContent";

/**
 * Rental page component.
 *
 * Fetches rental data by ID from the URL parameters and displays the rental content.
 * Uses the current language from i18n for localization.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered rental page.
 */

export const Rental = () => {
  const rental = useLoaderData();
  return (
    <div className="rental">
      <RentalContent rental={rental} />
    </div>
  );
};
