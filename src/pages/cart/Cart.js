import {Link} from 'react-router-dom';
import "./cart.css";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h3>Your cart has 4 item.</h3>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items">
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-sum">
              <h4 className="os-title">Order Summary</h4>
              <div className="os-items">
                <div className="os-item">
                  <div className="left">
                    Subtotal <span>2 item</span>
                  </div>
                  <div className="right">
                    $ <span>405</span>
                  </div>
                </div>
                <div className="os-item">
                  <div className="left">Shipping Fee</div>
                  <div className="right">
                    $ <span>10</span>
                  </div>
                </div>
                <div className="os-item">
                  <div className="left">Total</div>
                  <div className="right">
                    $ <span>415</span>
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
