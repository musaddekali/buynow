import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { db } from '../../context/firebase-config';
import OrderItem from './OrderItem';
import './orders.css';

const Orders = () => {
  const [orderItems, setOrderItems] = useState([]);

  const getOrderItems = useCallback(async () => {
    try {
      const q = query(collection(db, 'orders', 'userId_1', 'userOrders'), orderBy('createdAt', 'desc'));
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

  function clearOrderHistory() {
    if (window.confirm('Do you want to clear all orders?')) {
      const orderRef = collection(db, 'orders', 'userId_1', 'userOrders');
      deleteCollection(orderRef);
      console.log('Order History Cleared')
    }
  }

  async function deleteCollection(collectionRef) {
    const colSnap = await getDocs(collectionRef);
    let docId = [];
    colSnap.forEach(item => {
      docId.push(item.data().id);
    })
    docId.forEach(id => {
      deleteDoc(doc(collectionRef, id.toString())).then(() => {
        console.log('Collection deleted success');
      });
      setOrderItems([]);
    })

    console.log('deleteCollection function output -> ', collectionRef, docId);
  }

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

        <div className="clear-history mb-3">
          <button
            onClick={clearOrderHistory}
            className="btn primary-btn"
          >
            Clear Order History
          </button>
        </div>

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
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Orders;
