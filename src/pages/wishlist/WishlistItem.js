import { Link } from "react-router-dom";
import { BsTrash, BsCart } from "react-icons/bs";

const WishlistItem = ({ wishlist, handleAddToCart, deleteSingleWishlistItem }) => {
  const { id, title, price, image, createdAt } = wishlist;

  return (
    <div className="card-hr wishlist-item">
      <div className="card-hr-hd">
        <img
          src={image}
          width="80"
          height="80"
          alt={title}
          className="card-hr-img"
        />
        <div>
          <Link to={`/details/${id}`} className="card-hr-title">
            {title}
          </Link>
          <time dateTime={createdAt.toDate().toLocaleDateString()}>
            {createdAt.toDate().toDateString()}
          </time>
        </div>
      </div>
      <div className="card-hr-bd">
        <div className="card-hr-price">
          <span className="price">${price}</span>
          <button
            onClick={() => deleteSingleWishlistItem(id)}
            className="btn primary-btn wishlist-item-remove"
            title="Remove from Wishlist"
          >
            <BsTrash />
          </button>
        </div>
        <button
          onClick={() => handleAddToCart('cart', id)}
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
