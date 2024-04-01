import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./ProductDetail.css";
import { products } from "../../../helper/Products";
const ProductDetail = () => {
  const { id } = useParams<string>();
  const product = products.find((product) => product.id === id);

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        {product ? (
          <>
            <h2 className="productTitle">{product.title}</h2>
            <div className="product-detail-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-detail-image"
              />
            </div>
            <div className="productDescription">
              <p>{product.description}</p>
            </div>
          </>
        ) : (
          <p>Product not found!</p>
        )}
        <button className="buy-button">{product?.price} BGN</button>
      </div>
    </>
  );
};

export default ProductDetail;
