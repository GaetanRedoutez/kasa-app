import { useTranslation } from "react-i18next";
import DropDown from "../../components/Dropdown";
import Image from "/about.jpg";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div
        className="overlayTitle"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      />
      <div className="about__dropdown">
        <DropDown name={t("fiability.title")} items={t("fiability.content")} />
        <DropDown name={t("respect.title")} items={t("respect.content")} />
        <DropDown name={t("service.title")} items={t("service.content")} />
        <DropDown name={t("security.title")} items={t("security.content")} />
      </div>
    </div>
  );
};
