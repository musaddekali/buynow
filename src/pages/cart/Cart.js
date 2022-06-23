import { Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase-config";
import { useGlobalContext } from "../../context/context";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalQuantity, totalMoney, handleDelete } = useGlobalContext();
  const navigate = useNavigate();

  //// Handle Orders
  const handleOrders = async () => {
    if (!cart.length) {
      return;
    }
    const cartAcRef = doc(db, 'cartAccounts', 'userId_1', 'cartAccount', 'useruid');
    try {
      await setDoc(cartAcRef, {
        totalMoney: totalMoney,
        totalQuantity: totalQuantity
      })
      console.log('cart account total added');
    } catch (e) {
      console.log('Cart Account added Problems -> ', e);
    }

    cart.forEach(async (item) => {
      try {
        const orderRef = doc(db, 'orders', 'userId_1', 'userOrders', `${item.id}`);
        await setDoc(orderRef, {
          ...item,
          payState: false,
          createdAt: Timestamp.fromDate(new Date())
        })
        console.log(`${cart.length} item Ordered`);
        await deleteDoc(doc(db, 'cart', `${item.id}`));
        console.log('Deleted cart ordered items id');
      } catch (e) {
        console.log('Order added Problems -> ', e);
      }
    })
  }

  //// Quantity Increment
  const increment = async (itemId) => {
    try {
      const cartExistItem = cart.find((item) => item.id === itemId);
      const docRef = doc(db, "cart", `${itemId}`);
      const data = {
        ...cartExistItem,
        quantity: cartExistItem.quantity + 1,
      };
      await updateDoc(docRef, data);
    } catch (e) {
      console.log("Product Increment Error -> ", e);
    }
  };

  //// Quantity Decrement
  const decrement = async (itemId) => {
    try {
      const docRef = doc(db, "cart", `${itemId}`);
      const cartExistItem = cart.find((item) => item.id === itemId);
      const data = {
        ...cartExistItem,
        quantity: cartExistItem.quantity - 1,
      };
      cartExistItem.quantity >= 2 && (await updateDoc(docRef, data));
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
              {!cart.length && (
                <div className="container">
                  <p>There are no items in this cart</p>
                  <Link className="btn primary-btn" to="/">CONTINUE SHOPPING</Link>
                </div>
              )}
              {cart.map((c) => (
                <CartItem
                  key={c.id}
                  {...c}
                  handleDelete={handleDelete}
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
              <button
                onClick={() => { navigate(`/payment/userId`); handleOrders() }}
                disabled={!cart.length}
                className="btn primary-btn btn-block">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
