import { Link } from "react-router-dom";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../context/firebase";
import { useGlobalContext } from "../../context/context";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalQuantity, totalMoney } = useGlobalContext();

  // Remove Item
  const handleItemRemove = async (itemId) => {
    try {
      const docRef = doc(db, "cart", `${itemId}`);
      await deleteDoc(docRef);
      console.log("Item deleted id->", itemId);
    } catch (e) {
      console.log("Remove item error -> ", e);
    }
  };

  // Quantity Increment
  const increment = async (itemId) => {
    try {
      const cartExistItem = cart.find((item) => item.id === itemId);
      const docRef = doc(db, "cart", `${itemId}`);
      const data = {
        ...cartExistItem,
        quantity: cartExistItem.quantity + 1,
      };
      await updateDoc(docRef, data);
      console.log("Increment");
    } catch (e) {
      console.log("Product Increment Error -> ", e);
    }
  };

  // Quantity Decrement
  const decrement = async (itemId) => {
   try {
    const docRef = doc(db, "cart", `${itemId}`);
    const cartExistItem = cart.find((item) => item.id === itemId);
    const data = {
      ...cartExistItem,
      quantity: cartExistItem.quantity - 1,
    };
    cartExistItem.quantity >= 2 && (await updateDoc(docRef, data));
    console.log("Decrement");
   } catch (e) {
      console.log('Product Decrement Error ->', e)
   }
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h3>Your cart has {totalQuantity} item.</h3>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items">
              {cart.map((c) => (
                <CartItem
                  key={c.id}
                  {...c}
                  handleItemRemove={handleItemRemove}
                  increment={increment}
                  decrement={decrement}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-sum">
              <h4 className="os-title">Order Summary</h4>
              <div className="os-items">
                <div className="os-item">
                  <div className="left">
                    Subtotal <span>{totalQuantity} item</span>
                  </div>
                  <div className="right">
                    $<span>{totalMoney}</span>
                  </div>
                </div>
                <div className="os-item">
                  <div className="left">Shipping Fee</div>
                  <div className="right">
                    $<span>10</span>
                  </div>
                </div>
                <div className="os-item">
                  <div className="left">Total</div>
                  <div className="right">
                    $<span>{totalMoney + 10}</span>
                  </div>
                </div>
              </div>
              {/* <button className="btn primary-btn btn-block">Proceed to payment</button> */}
              <Link to="/payment" className="btn primary-btn btn-block">
                Proceed to payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
