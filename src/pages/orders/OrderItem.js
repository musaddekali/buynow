const OrderItem = ({ orderItem }) => {
    const { id, title, image, price, quantity, createdAt, paid } = orderItem;

    return (
        <div className="card-hr">
            <div className="card-hr-hd">
                <img
                    src={image}
                    width="80"
                    height="80"
                    alt=""
                    className="card-hr-img"
                />
                <div className="d-grid">
                    <p className="card-hr-title">
                        {title}
                    </p>
                    <span className="order-id">Order Id : #{id}</span>
                    <span className="order-price">
                        ${price} <span className="order-qnt">x {quantity}</span>
                    </span>
                    <time className="order-time" dateTime="2020-01-01">
                        {createdAt.toDate().toDateString()}
                    </time>
                </div>
            </div>
            <div className="card-hr-bd">
                <div className="order-btns">
                    {
                        !paid && (
                            <>
                                <i className='mb-2 me-2'>Pending</i>
                                <button className="btn secondary-btn mb-2 me-2">Pay</button>
                                <button className="btn secondary-btn mb-2 me-2">Cencle Order</button>
                            </>
                        )
                    }
                    {paid && <i>Paid</i>}
                </div>
            </div>
        </div>
    )
}

export default OrderItem