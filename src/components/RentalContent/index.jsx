import DropDown from "../Dropdown";
import emptyStar from "/emptyStar.svg";
import filledStar from "/filledStar.svg";

/**
 * RentalContent component displays detailed information about a rental property,
 * including its title, location, tags, host information, rating as stars, and dropdowns
 * for description and equipment.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.rental - The rental object containing all relevant data.
 * @param {string} props.rental.title - The title of the rental.
 * @param {string} props.rental.location - The location of the rental.
 * @param {string[]} props.rental.tags - Array of tags associated with the rental.
 * @param {Object} props.rental.host - Host information.
 * @param {string} props.rental.host.name - Name of the host.
 * @param {string} props.rental.host.picture - URL to the host's picture.
 * @param {number|string} props.rental.rating - The rating of the rental (1-5).
 * @param {string} props.rental.description - Description of the rental.
 * @param {string[]} props.rental.equipments - List of equipment available in the rental.
 * @returns {JSX.Element} The rendered RentalContent component.
 */
export const RentalContent = ({ rental }) => {
  const initialRating = new Array(5).fill(null);
  const ratingNumber = +rental.rating;
  const starArray = initialRating.map((_, index) =>
    index <= ratingNumber - 1 ? filledStar : emptyStar
  );

  return (
    <>
      <div className="rental__info">
        <div className="rental__info--text">
          <h2 className="rental__info--text-title">{rental.title}</h2>
          <span className="rental__info--text-location">{rental.location}</span>
          <div className="rental__info--text-tagsList tagsList">
            {rental.tags.map((tag, index) => (
              <div
                key={`${tag}-${index}`}
                className="rental__info--text-tagsList-tag tagsList__tag"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="rental__info--host">
          <div className="rental__info--host-data">
            <div className="rental__info--host-data-name">
              {rental.host.name}
            </div>
            <img
              src={rental.host.picture}
              className="rental__info--host-data-picture"
              alt={rental.host.name}
            />
          </div>
          <div className="rental__info--host-rating rating">
            {starArray.map((star, index) => (
              <img
                key={`${star}-${index}`}
                src={star}
                alt="Rating star"
                className="rating__star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rental__dropdown">
        <DropDown
          name="Description"
          componentClassName="rental__dropdown-description"
          items={rental.description}
        />
        <DropDown
          name="Equipements"
          componentClassName="rental__dropdown-equipments"
          items={rental.equipments}
        />
      </div>
    </>
  );
};
