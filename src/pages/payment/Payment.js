import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { collection, doc, getDoc, getDocs, Timestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../context/firebase-config";
import "./payment.css";
import img1 from '../../assets/images/bkash.png';
import img2 from '../../assets/images/nagad.png';
import img3 from '../../assets/images/duchBangla.png';
import img4 from '../../assets/images/payoneer.png';
import img5 from '../../assets/images/paypal.jpg';
import { useGlobalContext } from "../../context/context";

const paymentImages = [img1, img2, img3, img4, img5];

const PaymentItem = ({ handleCurrentOrdersPayment, img }) => {
  return (
    <div
      onClick={handleCurrentOrdersPayment}
      className="payment-item"
    >
      <img
        src={img}
        alt="payment"
        className="payment-item-img"
      />
    </div>
  )
}

const initialProductsAccount = {
  totalMoney: 0,
  totalQuantity: 0
}

const Payment = () => {
  const {useruid} = useGlobalContext();
  const [recentPdAccount, setRecentPdAccount] = useState(initialProductsAccount);
  const { totalMoney, totalQuantity } = recentPdAccount;
  const navigate = useNavigate();

  //// Handle PAYMENT for current unpaid orders (not all Unpaid orders)
  const handleCurrentOrdersPayment = async () => {
    if (!totalMoney) {
      alert('Your Products are not ready to Pay');
      return;
    };
    if (window.confirm('Are you Agree with Payment')) {
      setRecentPdAccount(initialProductsAccount);
      const recPdAcRef = doc(db, 'recentProductAccounts', useruid);
      await updateDoc(recPdAcRef, initialProductsAccount);
      const unpaidOrdersRef = collection(db, 'recentUnpaidOrders', useruid, 'userRecentUnpaidOrders');
      const unpaidOrderList = [];
      const docsSnap = await getDocs(unpaidOrdersRef);
      docsSnap.forEach((item) => {
        unpaidOrderList.push(item.data());
      })
      unpaidOrderList.map(item => {
        return handleUnpaidOrdersToPaid(item);
      });
      alert('Your Payment Successfull');
      navigate('/');
    }
  }

  //// Handle Recent Unpaid Orders (make ---  paid = true);
  const handleUnpaidOrdersToPaid = async (orderItem) => {
    try {
      const mainOrderRef = doc(db, 'orders', useruid, 'userOrders', orderItem.id.toString());
      await updateDoc(mainOrderRef, { ...orderItem, paid: true, createdAt: Timestamp.fromDate(new Date()) });
    } catch (e) {
      console.log('Upadate Main orders error -> ', e.message);
    }
  }


  //// Get Recent Product Account Data (totol Price and Quantity)
  const getRecentProductAccount = useCallback(async () => {
    try {
      const recPdAcRef = doc(db, 'recentProductAccounts', useruid);
      const snap = await getDoc(recPdAcRef);
      setRecentPdAccount(snap.data());
    } catch (e) {
      console.log('Cart Account Getting Problems -> ', e)
    }
  }, [setRecentPdAccount]);

  useEffect(() => {
    getRecentProductAccount()
  }, [getRecentProductAccount])

  return (
    <section className="payment">
      <div className="container">
        <div className="section-title">
          <h3>payment</h3>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="payment-items">
              {
                paymentImages.map((img, i) => (
                  <PaymentItem
                    key={i}
                    img={img}
                    handleCurrentOrdersPayment={handleCurrentOrdersPayment}
                  />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
