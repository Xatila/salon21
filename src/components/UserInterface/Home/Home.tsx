import { products } from "../../helper/Products";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import Product from "./Products/Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <p className="homeHelloMsg">Здравей в Salon21</p>
        <p className="homeQuestion">Готов ли си за нова визия?</p>
      </div>
      <ImageSlider />
      <div className="productWrapper"></div>
      <div className="productsContainer">
        {products.map((p)=><Product key={p.id} title={p.title} image={p.image} price={p.price}/>)}
      </div>
    </>
  );
};

export default Home;
