import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { fetchRentals } from "../../../api/service";
/**
 * Component to render rental cards on the homepage.
 * Each card represents a rental item with a title and a cover image.
 *
 * @returns {JSX.Element} - The rendered Cards component.
 */
function Cards() {
  const [rentals, setRentals] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchRentalsData() {
      const rentalsData = await fetchRentals(i18n.language);
      setRentals(rentalsData);
    }
    fetchRentalsData();
  }, [i18n.language]);

  return (
    <section className="cards">
      {rentals.map((rental, i) => (
        <Link
          to={`/rental/${rental.id}`}
          key={rental.id + i18n.language + i}
          className="cards__Link"
          style={{ backgroundImage: `url(${rental.cover})` }}
        >
          <article className="cards__Link-article">
            <p className="cards__Link-article-title">{rental.title}</p>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Cards;
