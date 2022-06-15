import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

const ProductCard = ({ product, handleAddToCart }) => {
  const { id, title, images, price } = product;

  return (
    <div className="d-flex align-items-stretch justify-content-center mb-2">
      <div className="card">
        <Link to={`/details/${id}`}>
          <img
            className="card-img-top"
            src={images[0]}
            title={title}
            alt={title}
          />
        </Link>
        <div className="card-body">
          <Link to={`/details/${id}`} className="card-title" title={title}>
            {`${title.substring(0, 100)}...`}
          </Link>
          <h4 className="card-price secondary-clr">
            $<span>{price}</span>
          </h4>
          <button title="Add to Wishlist" className="btn card-wishlist">
            <BsHeart />
          </button>
          <button
            onClick={() => handleAddToCart(id)}
            className="btn accent-btn btn-block"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
