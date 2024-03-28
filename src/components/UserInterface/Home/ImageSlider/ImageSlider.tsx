import { useEffect } from "react";
import barberHomeImg1 from "../../../../assets/images/barberHome (1).jpg";
import barberHomeImg2 from "../../../../assets/images/barberHome (1).webp";
import barberHomeImg3 from "../../../../assets/images/barberHome (2).jpg";
import barberHomeImg4 from "../../../../assets/images/barberHome (3).jpg";
import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    barberHomeImg1,
    barberHomeImg2,
    barberHomeImg3,
    barberHomeImg4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(
    images.length - 1
  );

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    setPreviousImageIndex(currentImageIndex-1);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          style={{
            opacity:
              index === currentImageIndex || index === previousImageIndex
                ? 1
                : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
