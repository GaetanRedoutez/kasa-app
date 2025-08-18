import { useTranslation } from "react-i18next";
import Image from "/home.jpg";

/**
 * Home component renders the main landing section with a background image and a title.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div
        className="overlayTitle"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <h2 className="overlayTitle__h2">
          {t("title")}
          <br className="smallBreak" />
          {t("subtitle")}
        </h2>
      </div>
    </div>
  );
};
