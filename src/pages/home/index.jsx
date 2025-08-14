import Image from "/home.jpg";

/**
 * Home component renders the main landing section with a background image and a title.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
export const Home = () => {
  const titleText1 = "Chez vous, ";
  const titleText2 = "partout et ailleurs";
  const title = (
    <h2 className="overlayTitle__h2">
      {titleText1}
      <br className="smallBreak" />
      {titleText2}
    </h2>
  );

  return (
    <div className="home">
      <div
        className="overlayTitle"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        {title}
      </div>
    </div>
  );
};
