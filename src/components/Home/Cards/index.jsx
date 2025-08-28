import { Link } from "react-router-dom";
import { fetchRentals } from "../../../api/service";
import { useEffect, useState } from "react";
import i18next from "i18next";
/**
 * Component to render rental cards on the homepage.
 * Each card represents a rental item with a title and a cover image.
 *
 * @returns {JSX.Element} - The rendered Cards component.
 */
function Cards() {
  const [rentals, setRentals] = useState([]);
  const lang = i18next.language;
  console.log(lang);
  useEffect(() => {
    async function fetchRentalsData() {
      const rentalsData = await fetchRentals(lang);
      setRentals(rentalsData);
    }
    fetchRentalsData();
  }, [lang]);

  return (
    <section className="cards">
      {rentals.map((rental, i) => (
        <Link
          to={`/rental/${rental.id}`}
          key={rental.id + lang + i}
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
