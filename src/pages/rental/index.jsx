import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";
import { fetchRentalById } from "../../api/service";
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
  const { id } = useParams();
  const { i18n } = useTranslation();

  const [rental, setRental] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchRentalData() {
      try {
        const rentalData = await fetchRentalById(id, i18n.language);
        setRental(rentalData);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    }

    if (id) fetchRentalData();
  }, [id, i18n.language]);

  if (hasError || !id) return <Navigate to="/error" />;

  return (
    <div className="rental">{rental && <RentalContent rental={rental} />}</div>
  );
};
