import Navbar from "../Navbar/Navbar";
import "./Home.css";
import ImageSlider from "./ImageSlider/ImageSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <p className="homeHelloMsg">Здравей в Salon21</p>
        <p className="homeQuestion">Готов ли си за нова визия?</p>
      </div>
      <ImageSlider />
    </>
  );
};

export default Home;
