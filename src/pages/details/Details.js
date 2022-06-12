import { BsChevronLeft, BsChevronRight, BsDash, BsPlus } from 'react-icons/bs';
import './details.css';
import Img from '../../assets/images/coffeeCup.jpg';

const Details = () => {
  return (
    <section className="product-details">
      <div className="container">
        <div className="section-title">
          <h3>Product Details</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="pd-img-wrap">
              <div className="pd-img-in">
                <div className="pd-img-big">
                  <img
                    src={Img}
                    alt="product-details"
                  />
                </div>
                <div className="img-thumbs-wrap">
                  <div className="img-thumb-arrows">
                    <button className="arrow-left">
                      <BsChevronLeft />
                    </button>
                    <button className="arrow-right">
                      <BsChevronRight />
                    </button>
                  </div>
                  <div className="pd-img-thumbs">
                    <div className="pd-img-thumb">
                      <img
                        src={Img}
                        alt="product-details-thumb"
                      />
                    </div>
                    <div className="pd-img-thumb">
                      <img
                        src={Img}
                        alt="product-details-thumb"
                      />
                    </div>
                    <div className="pd-img-thumb">
                      <img
                        src={Img}
                        alt="product-details-thumb"
                      />
                    </div>
                    <div className="pd-img-thumb">
                      <img
                        src={Img}
                        alt="product-details-thumb"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pd-text-wrap">
              <h4 className="pd-title">
                Dell Laptop 33c44 i5 4gb Ram 512gb SSD
              </h4>
              <h4 className="pd-price secondary-clr">
                $ <span>305.99</span>
              </h4>
              <div className="quantity-count-wrap">
                <span className="quantity-count-text">Quantity :</span>
                <div className="quantity-count-in">
                  <button className="btn primary-btn decrement-btn">
                   <BsDash/>
                  </button>
                  <input type="text" />
                  <button className="btn primary-btn increment-btn">
                   <BsPlus/>
                  </button>
                </div>
              </div>
              <div className="pd-action-btns">
                <button className="btn primary-btn">Buy Now</button>
                <button className="btn accent-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
