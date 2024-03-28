import "./Product.css";
interface ProductProps {
  title: string;
  image: string;
  price: string;
}
const Product = ({ title, image, price }: ProductProps) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <button className="buy-button" onClick={console.log}>
          Купи
        </button>
      </div>
    </div>
  );
};

export default Product;
