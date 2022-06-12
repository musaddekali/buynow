import { Link } from "react-router-dom";
import { BsTrash, BsCart } from "react-icons/bs";
import Img from "../../assets/images/coffeeCup.jpg";

const WishlistItem = () => {
  return (
    <div className="card-hr wishlist-item">
      <div className="card-hr-hd">
        <img
          src={Img}
          width="80"
          height="80"
          alt="wishlistItem"
          className="card-hr-img"
        />
        <Link to="/details" className="card-hr-title">
          Coffee powder best quality Ispahani-3434.
        </Link>
      </div>
      <div className="card-hr-bd">
        <div className="card-hr-price">
          <span className="price">$505</span>
          <button
            className="btn primary-btn wishlist-item-remove"
            title="Remove from Wishlist"
          >
            <BsTrash />
          </button>
        </div>
        <button
          className="btn primary-btn wishlist-item-cart align-self-center ms-md-auto"
          title="Add to Cart"
        >
          <BsCart />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
