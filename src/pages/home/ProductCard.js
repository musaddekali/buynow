import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import Img from "../../assets/images/coffeeCup.jpg";

const ProductCard = () => {
  return (
    <div className="d-flex align-items-stretch justify-content-center mb-2">
      <div className="card">
        <Link to="/details">
          <img className="card-img-top" src={Img} alt="product" />
        </Link>
        <div className="card-body">
          <Link to="/details" className="card-title">
            Some quick example text to build on...
          </Link>
          <h4 className="card-price secondary-clr">
            $ <span>250.99</span>
          </h4>
          <button title="Add to Wishlist" className="btn card-wishlist">
            <BsHeart />
          </button>
          {/* <button className="btn accent-btn btn-block">Add Cart</button> */}
          <Link
            to="/cart"
            className="btn accent-btn btn-block"
            title="Add to Cart"
          >
            Add Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
