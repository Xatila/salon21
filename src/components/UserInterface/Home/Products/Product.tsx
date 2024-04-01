import { Link } from "react-router-dom";
import "./Product.css";
interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: string;
}

const Product = ({ id, title, image, price }: ProductProps): JSX.Element => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
      </Link>

      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <button className="buy-button">Купи</button>
      </div>
    </div>
  );
};

export default Product;
