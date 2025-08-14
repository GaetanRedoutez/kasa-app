import Image from "/about.jpg";

export const About = () => {
  return (
    <div className="about">
      <div
        className="overlayTitle"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      />
      <div className="about__dropdown"></div>
    </div>
  );
};
