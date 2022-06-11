import {Link} from 'react-router-dom';
import Img from "../../assets/images/coffeeCup.jpg";
import "./cart.css";

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
              <div className="card-hr">
                <div className="card-hr-hd">
                  <img
                    src={Img}
                    width="80"
                    height="80"
                    alt="product"
                    className="card-hr-img"
                  />
                  <a href="details.html" className="card-hr-title">
                    {" "}
                    HBQ I7S Double Dual Mini Wireless 4.1 BluetoothEarphone With
                    Power Case - White
                  </a>
                </div>
                <div className="card-hr-bd">
                  <div className="card-hr-price">
                    <span className="price">$604</span>
                    <button className="btn card-hr-remove">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="quantity-count-wrap">
                    <div className="quantity-count-in">
                      <button className="btn primary-btn decrement-btn">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                          </svg>
                        </span>
                      </button>
                      <input type="text" />
                      <button className="btn primary-btn increment-btn">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
