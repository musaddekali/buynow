import { Link, useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase-config";
import { useGlobalContext } from "../../context/context";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { useruid, cart, totalQuantity, totalMoney } = useGlobalContext();
  const navigate = useNavigate();

  //// Handle Orders
  const handleOrders = async () => {
    if (!cart.length) {
      return;
    }
    // Recent Product Account for total Price and Quantity
    const recentPdAcRef = doc(db, 'recentProductAccounts', useruid);
    try {
      await setDoc(recentPdAcRef, {
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
        const orderRef = doc(db, 'orders', useruid, 'userOrders', item.id.toString());
        // Recent Unpaid Orders (Temporarely contains current orders)
        const recentUnpOrdRef = doc(db, 'recentUnpaidOrders', useruid, 'userRecentUnpaidOrders', item.id.toString());
        const data = {
          ...item,
          paid: false,
          createdAt: Timestamp.fromDate(new Date())
        }
        // add new order
        await setDoc(orderRef, data);
        // add new recent order
        await setDoc(recentUnpOrdRef, data);
        // delete ordered Cart items
        await deleteDoc(doc(db, 'cart', useruid, 'userCart', `${item.id}`));
      } catch (e) {
        console.log('Order added Problems -> ', e);
      }
    })
  }

  // Delete Recent Unpaid orders when click for new orders("in -- Proceed to payment -- Btn")
  const deletePastOrders = async () => {
    try {
      const pastOrdersRef = collection(db, 'recentUnpaidOrders', useruid, 'userRecentUnpaidOrders');
      const pastDataSnap = await getDocs(pastOrdersRef);
      pastDataSnap.forEach(async item => {
        await deleteDoc(doc(db, 'recentUnpaidOrders', useruid, 'userRecentUnpaidOrders', `${item.data().id}`));
      });
    } catch (e) {
      console.log('Past order data get problems-> ', e);
    }
  }

  /// Delete Single Cart Item
  async function deleteSingleCartItem(id) {
    if (window.confirm('Do you want to delete this item?')) {
      try {
        const cartRef = doc(db, 'cart', useruid, 'userCart', id.toString());
        await deleteDoc(cartRef);
      } catch (e) {
        console.log('Cart single item deleting problems -> ', e);
      }
    }
  }

  /// Clear All Cart items
  function clearCartHistory() {
    if (window.confirm('Do you want to clear all Cart items?')) {
      const orderRef = collection(db, 'cart', useruid, 'userCart');
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
    } catch (e) {
      console.log("cart Collection delete Problems -> ", e)
    }
  }


  //// Quantity Increment
  const increment = async (itemId) => {
    try {
      const cartExistItem = cart.find((item) => item.id === itemId);
      const cartRef = doc(db, "cart", useruid, 'userCart', `${itemId}`);
      const data = {
        ...cartExistItem,
        quantity: cartExistItem.quantity + 1,
      };
      await updateDoc(cartRef, data);
    } catch (e) {
      console.log("Product Increment Error -> ", e);
    }
  };

  //// Quantity Decrement
  const decrement = async (itemId) => {
    try {
      const cartRef = doc(db, "cart", useruid, 'userCart', `${itemId}`);
      const cartExistItem = cart.find((item) => item.id === itemId);
      const data = {
        ...cartExistItem,
        quantity: cartExistItem.quantity - 1,
      };
      cartExistItem.quantity >= 2 && (await updateDoc(cartRef, data));
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
              onClick={clearCartHistory}
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
                  deleteSingleCartItem={deleteSingleCartItem}
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
                onClick={() => { handleOrders(); navigate(`/payment/${useruid}`) }}
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
