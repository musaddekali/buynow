import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { BsDash, BsPlus, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { db } from '../../context/firebase';

const CartItem = ({ id, title, price, image, quantity }) => {
  const { cart } = useGlobalContext();
  const docRef = doc(db, 'cart', `${id}`);
  // Remove Item 
  const handleItemRemove = async () => {
    try {
      await deleteDoc(docRef);
      console.log('Item deleted id->', id);
    } catch (e) {
      console.log("Remove item error -> ", e);
    }
  }

  // Quantity Increment 
  const increment = async () => {
    const cartExistItem = cart.find(item => item.id === id);
    const data = {
      ...cartExistItem,
      quantity: cartExistItem.quantity + 1
    }
    await updateDoc(docRef, data);
    console.log('Increment');
  }
  // Quantity Decrement 
  const decrement = async () => {
    const cartExistItem = cart.find(item => item.id === id);
    const data = {
      ...cartExistItem,
      quantity: cartExistItem.quantity - 1
    }
    cartExistItem.quantity >= 2 && await updateDoc(docRef, data);
    console.log('Decrement');
  }

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
            onClick={handleItemRemove}
            className="btn card-hr-remove"
          >
            <BsTrash />
          </button>
        </div>
        <div className="quantity-count-wrap">
          <div className="quantity-count-in">
            <button
              onClick={decrement}
              className="btn primary-btn decrement-btn"
            >
              <BsDash />
            </button>
            <input type="text" readOnly value={quantity} />
            <button
              onClick={increment}
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
