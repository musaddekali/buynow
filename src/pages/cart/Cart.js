import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import "./cart.css";
import CartItem from './CartItem';

const Cart = () => {
  const { cart, totalQuantity, totalMoney } = useGlobalContext();

  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h3>Your cart has {totalQuantity} item.</h3>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items">
              {
                cart.map(c => (
                  <CartItem key={c.id} {...c} />
                ))
              }
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
