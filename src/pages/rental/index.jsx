import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    if (!id) return;
    async function fetchRentalData() {
      const rentalsData = await fetchRentalById(id, i18n.language);
      setRental(rentalsData);
    }

    fetchRentalData();
  }, [id, i18n.language]);

  return (
    <div className="rental">{rental && <RentalContent rental={rental} />}</div>
  );
};
