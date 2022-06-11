import "./payment.css";

const Payment = () => {
  return (
    <section className="payment">
      <div className="container">
        <div className="section-title">
          <h3>payment</h3>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="payment-items">
              <div className="payment-item">
                <span>bKash</span>
              </div>
              <div className="payment-item">
                <span>Nagod</span>
              </div>
              <div className="payment-item">
                <span>Duch Bangla</span>
              </div>
              <div className="payment-item">
                <span>Master Card</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
