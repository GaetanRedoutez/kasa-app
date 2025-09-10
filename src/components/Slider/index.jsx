import { useState, useEffect } from "react";
import arrowRight from "/arrow-right.svg";
import arrowLeft from "/arrow-left.svg";

export const Slider = ({ selectedRental, componentClassName }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = selectedRental?.pictures || [];
  const arrayImageLength = carouselImages.length;
  const hasMultipleImages = arrayImageLength > 1;

  // Function to navigate to the previous image in the carousel
  const prevIndex = () => {
    if (!hasMultipleImages) return;
    setCarouselIndex((prev) => (prev <= 0 ? arrayImageLength - 1 : prev - 1));
  };

  // Function to navigate to the next image in the carousel
  const nextIndex = () => {
    if (!hasMultipleImages) return;
    setCarouselIndex((prev) => (prev >= arrayImageLength - 1 ? 0 : prev + 1));
  };

  // Reset carousel index when selectedRental changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedRental]);

  // Ensure carousel index is within bounds
  useEffect(() => {
    if (carouselIndex >= arrayImageLength && arrayImageLength > 0) {
      setCarouselIndex(0);
    }
  }, [carouselIndex, arrayImageLength]);

  // Don't render if no images
  if (!carouselImages.length) {
    return null;
  }

  return (
    <div className={`${componentClassName} slider`}>
      {/* Display the current image in the carousel */}
      <img
        src={carouselImages[carouselIndex]}
        alt={`${selectedRental?.title || "Rental image"} ${carouselIndex + 1}`}
        className={`${componentClassName}-picture slider__picture`}
      />

      {/* Navigation arrows for moving to the previous or next image */}
      {hasMultipleImages && (
        <div className={`${componentClassName}-arrow slider__arrow`}>
          <button
            className={`${componentClassName}-arrow-prev slider__arrow-prev`}
            onClick={prevIndex}
            aria-label="Image précédente"
          >
            <img src={arrowLeft} alt="" className="slider__arrow-prev-img" />
          </button>
          <button
            className={`${componentClassName}-arrow-next slider__arrow-next`}
            onClick={nextIndex}
            aria-label="Image suivante"
          >
            <img src={arrowRight} alt="" className="slider__arrow-next-img" />
          </button>
        </div>
      )}

      {/* Counter displaying the current image index and total images count */}
      {hasMultipleImages && (
        <div className={`${componentClassName}-counter slider__counter`}>
          {carouselIndex + 1}/{arrayImageLength}
        </div>
      )}
    </div>
  );
};
