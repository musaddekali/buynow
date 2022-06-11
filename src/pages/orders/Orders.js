import './orders.css';
import Img from '../../assets/images/coffeeCup.jpg'

const Orders = () => {
  return (
    <section className="ss">
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
          <div className="card-hr">
            <div className="card-hr-hd">
              <img
                src={Img}
                width="80"
                height="80"
                alt=""
                className="card-hr-img"
              />
              <div className="d-grid">
                <a href="details.html" className="card-hr-title">
                  laptop core i3 7th genaration Dell inspiron
                </a>
                <span className="order-id">Order Id : #59849885</span>
                <span className="order-price">
                  $500 <span className="order-qnt">x 4</span>
                </span>
                <time className="order-time" datetime="2020-01-01">
                  Jan 1, 2020
                </time>
              </div>
            </div>
            <div className="card-hr-bd">
              <div className="order-btns">
                <button className="btn secondary-btn mb-2">Pending</button>
                <button className="btn secondary-btn mb-2">Paid</button>
                <button className="btn secondary-btn mb-2">Pay</button>
                <button className="btn primary-btn mb-2">Cencle Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
