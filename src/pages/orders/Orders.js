import OrderItem from './OrderItem';
import './orders.css';

const Orders = () => {
  return (
    <section className="orders">
      <div className="container">
        <div className="section-title">
          <h3>My Orders</h3>
        </div>

        <div className="order-nav">
          <ul className="order-nav-list">
            <li className="active">All</li>
            <li>Pending</li>
            <li>Paid</li>
          </ul>
        </div>

        <div className="order-items">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </section>
  );
};

export default Orders;
