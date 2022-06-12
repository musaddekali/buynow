import {BsDash, BsPlus, BsTrash} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Img from "../../assets/images/coffeeCup.jpg";

const CartItem = () => {
  return (
    <div className="card-hr">
      <div className="card-hr-hd">
        <img
          src={Img}
          width="80"
          height="80"
          alt="product"
          className="card-hr-img"
        />
        <Link to="/details" className="card-hr-title">
          {" "}
          HBQ I7S Double Dual Mini Wireless 4.1 BluetoothEarphone With Power
          Case - White
        </Link>
      </div>
      <div className="card-hr-bd">
        <div className="card-hr-price">
          <span className="price">$604</span>
          <button className="btn card-hr-remove">
            <BsTrash />
          </button>
        </div>
        <div className="quantity-count-wrap">
          <div className="quantity-count-in">
            <button className="btn primary-btn decrement-btn">
              <BsDash />
            </button>
            <input type="text" />
            <button className="btn primary-btn increment-btn">
              <BsPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
