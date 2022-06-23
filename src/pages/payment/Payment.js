import { doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { db } from "../../context/firebase-config";
import "./payment.css";

const Payment = () => {
  const [cartAc, setCartAc] = useState({ totalMoney: 0, totalQuantity: 0 });
  const { totalMoney, totalQuantity } = cartAc;

  //// Get Cart Account Data (totol Price and Quantity)
  const getCartAccount = useCallback(async () => {
    try {
      const cartAcRef = doc(db, 'cartAccounts', 'userId_1', 'cartAccount', 'useruid');
      const snap = await getDoc(cartAcRef);
      setCartAc(snap.data());
      console.log('Cart Account Data Getted in payment page');
    } catch (e) {
      console.log('Cart Account Getting Problems -> ', e)
    }
  }, [setCartAc]);

  useEffect(() => {
    getCartAccount()
  }, [getCartAccount])

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
