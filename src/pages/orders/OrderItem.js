import { Link } from 'react-router-dom'
import Img from '../../assets/images/coffeeCup.jpg'

const OrderItem = () => {
    return (
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
                    <Link to="/details" className="card-hr-title">
                        laptop core i3 7th genaration Dell inspiron
                    </Link>
                    <span className="order-id">Order Id : #59849885</span>
                    <span className="order-price">
                        $500 <span className="order-qnt">x 4</span>
                    </span>
                    <time className="order-time" dateTime="2020-01-01">
                        Jan 1, 2020
                    </time>
                </div>
            </div>
            <div className="card-hr-bd">
                <div className="order-btns">
                    <button className="btn secondary-btn mb-2 me-2">Pending</button>
                    <button className="btn secondary-btn mb-2 me-2">Paid</button>
                    <button className="btn secondary-btn mb-2 me-2">Pay</button>
                    <button className="btn primary-btn mb-2 me-2">Cencle Order</button>
                </div>
            </div>
        </div>
    )
}

export default OrderItem