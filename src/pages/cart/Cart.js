import { Link, useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, setDoc, Timestamp, updateDoc } from "firebase/firestore";
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
    // Recent Product Account for total Price and Quantity
    const curPdAcRef = doc(db, 'recentProductAccounts', 'userId_1');
    try {
      await setDoc(curPdAcRef, {
        totalMoney: totalMoney,
        totalQuantity: totalQuantity
      })
    } catch (e) {
      console.log('Cart Account added Problems -> ', e);
    }

    // Called DeletePastOrders function
    deletePastOrders();

    cart.forEach(async (item) => {
      try {
        // Order Ref (Main Order)
        const orderRef = doc(db, 'orders', 'userId_1', 'userOrders', item.id.toString());
        // Recent Unpaid Orders (Temporarely contains current orders)
        const recentUnpOrdRef = doc(db, 'recentUnpaidOrders', 'userId_1', 'userRecentUnpaidOrders', item.id.toString());
        const data = {
          ...item,
          // id: orderId,
          paid: false,
          createdAt: Timestamp.fromDate(new Date())
        }
        // add new order
        await setDoc(orderRef, data);
        // add new recent order
        await setDoc(recentUnpOrdRef, data);
        // delete ordered Cart items
        await deleteDoc(doc(db, 'cart', `${item.id}`));
      } catch (e) {
        console.log('Order added Problems -> ', e);
      }
    })
  }

  /// Clear All Orders
  function clearOrderHistory() {
    if (window.confirm('Do you want to clear all Cart items?')) {
      const orderRef = collection(db, 'cart');
      deleteCollection(orderRef);
    }
  }

  async function deleteCollection(collectionRef) {
    try {
      const colSnap = await getDocs(collectionRef);
      let docId = [];
      colSnap.forEach(item => {
        docId.push(item.data().id);
      })
      docId.forEach(async id => {
        await deleteDoc(doc(collectionRef, id.toString()));
      })
      console.log('carts deleted success');
    } catch (e) {
      console.log("cart Collection delete Problems -> ", e)
    }
  }

  // Delete Recent Unpaid orders
  const deletePastOrders = async () => {
    try {
      const pastOrdersRef = collection(db, 'recentUnpaidOrders', 'userId_1', 'userRecentUnpaidOrders');
      const pastDataSnap = await getDocs(pastOrdersRef);
      pastDataSnap.forEach(async item => {
        await deleteDoc(doc(db, 'recentUnpaidOrders', 'userId_1', 'userRecentUnpaidOrders', `${item.data().id}`));
      });
    } catch (e) {
      console.log('Past order data get problems-> ', e);
    }
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
        {cart.length > 2 && (
          <div className="clear-history mb-3">
            <button
              onClick={clearOrderHistory}
              className="btn primary-btn"
            >
              Clear All Cart
            </button>
          </div>
        )}
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items">
              {!cart.length && (
                <div className="container">
                  <p>There are no items in this cart</p>
                  <Link className="btn primary-btn mb-3" to="/">CONTINUE SHOPPING</Link>
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
