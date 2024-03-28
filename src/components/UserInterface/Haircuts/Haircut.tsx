import hair from "../../../assets/images/hair.png";
import beard from "../../../assets/images/beard.png";
import hairAndBeard from "../../../assets/images/haird and beard.png";
import "./Haircut.css";
import AuthedUserInfo from "../../Firebase/AuthedUserInfo";
import { useState } from "react";

const Haircut = () => {
  const haircuts = [
    { name: "Коса", img: hair },
    { name: "Брада", img: beard },
    { name: "Коса & Брада", img: hairAndBeard },
  ];
  const [selectedHaircut, setSelectedHaircut] = useState<string>("");
  const handleCardClick = (index: number) => {
    const cards = document.querySelectorAll(".haircutCard");
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.toggle("clicked");
        setSelectedHaircut(haircuts[i].name);
      } else {
        card.classList.remove("clicked");
      }
    });
  };
  return (
    <>
      
      <div className="haircutsContainer">
        {haircuts.map((haircut, index) => (
          <div
            className="haircutCard"
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="haircutImageContainer">
              <img
                src={haircut.img}
                alt={haircut.name}
                className="haircutImage"
              />
            </div>
            <div className="card-content">
              <h2 className="haircutTitle">{haircut.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <AuthedUserInfo selectedHaircut={selectedHaircut} />
    </>
  );
};

export default Haircut;
