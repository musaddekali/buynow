import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { db } from '../../context/firebase-config';
import OrderItem from './OrderItem';
import './orders.css';

const Orders = () => {
  const { useruid } = useGlobalContext();
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();

  /// handle Payment from Order page for spacific item
  const handlePaymentFromOrderList = async (itemId) => {
    deletePastOrders();
    try {
      const orderRef = doc(db, 'orders', useruid, 'userOrders', itemId.toString());
      const recentUnpOrdRef = doc(db, 'recentUnpaidOrders', useruid, 'userRecentUnpaidOrders', `${itemId}`)
      const recentPrdAcRef = doc(db, 'recentProductAccounts', useruid);
      const orderItem = await getDoc(orderRef);
      await setDoc(recentUnpOrdRef, orderItem.data());
      const { price, quantity } = orderItem.data();
      await setDoc(recentPrdAcRef, {
        totalMoney: price * quantity,
        totalQuantity: quantity
      });
      navigate(`/payment/${useruid}`);
    } catch (e) {
      console.log('handlePaymentFromOrderList Problem -> ', e)
    }
  }

  // Delete Recent Unpaid orders
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

  /// Clear All Orders
  function clearOrderHistory() {
    if (window.confirm('Do you want to clear all orders?')) {
      const orderRef = collection(db, 'orders', useruid, 'userOrders');
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
        setOrderItems([]);
      })
    } catch (e) {
      console.log("Orders Collection delete Problems -> ", e)
    }
  }

  //// Cancel Single Order
  async function handleCancelOrder(itemId) {
    if (window.confirm('Do you Wnat to cancle your Order ?')) {
      try {
        const docRef = doc(db, 'orders', useruid, 'userOrders', itemId.toString());
        await deleteDoc(docRef);
        setOrderItems(prevS => prevS.filter(order => order.id !== itemId));
        console.log('Single Doc has Deleted! ID -> ', docRef.id);
      } catch (e) {
        console.log('Cancel Order Problems -> ', e);
      }
    }
  }

  /// Get all orders item
  const getOrderItems = useCallback(async () => {
    try {
      const q = query(collection(db, 'orders', useruid, 'userOrders'), orderBy('createdAt', 'desc'));
      const docs = await getDocs(q);
      let data = [];
      docs.forEach(item => {
        data.push(item.data());
      })
      setOrderItems(data);
    } catch (e) {
      console.log('Order Getting Problems -> ', e);
    }
  }, []);

  useEffect(() => {
    getOrderItems();
  }, [getOrderItems]);

  if (!orderItems.length) {
    return (
      <div className="container p-5">
        <h1>No Orderd Item Available</h1>
      </div>
    )
  }

  return (
    <section className="orders">
      <div className="container">
        <div className="section-title">
          <h3>My Orders</h3>
        </div>

        {orderItems.length > 2 && (
          <div className="clear-history mb-3">
            <button
              onClick={clearOrderHistory}
              className="btn primary-btn"
            >
              Clear Order History
            </button>
          </div>
        )}

        <div className="order-nav">
          <ul className="order-nav-list">
            <li className="active">All</li>
            <li>Pending</li>
            <li>Paid</li>
          </ul>
        </div>

        <div className="order-items">
          {
            orderItems.map(item => (
              <OrderItem
                key={item.id}
                orderItem={item}
                handlePaymentFromOrderList={handlePaymentFromOrderList}
                handleCancelOrder={handleCancelOrder}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Orders;
