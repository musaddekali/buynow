import { BsDash, BsPlus, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartItem = ({
  id,
  title,
  price,
  image,
  quantity,
  deleteSingleCartItem,
  increment,
  decrement,
}) => {
  return (
    <div className="card-hr">
      <div className="card-hr-hd">
        <img
          src={image}
          width="80"
          height="80"
          alt="product"
          className="card-hr-img"
        />
        <Link to={`/details/${id}`} className="card-hr-title">
          {title}
        </Link>
        <p>ID: {id}</p>
      </div>
      <div className="card-hr-bd">
        <div className="card-hr-price">
          <span className="price">${price}</span>
          <button
            onClick={() => deleteSingleCartItem(id)}
            className="btn card-hr-remove"
          >
            <BsTrash />
          </button>
        </div>
        <div className="quantity-count-wrap">
          <div className="quantity-count-in">
            <button
              onClick={() => decrement(id)}
              className="btn primary-btn decrement-btn"
            >
              <BsDash />
            </button>
            <input type="text" readOnly value={quantity} />
            <button
              onClick={() => increment(id)}
              className="btn primary-btn increment-btn"
            >
              <BsPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
