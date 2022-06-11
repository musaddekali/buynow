import './details.css';
import Img  from '../../assets/images/coffeeCup.jpg';

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
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button className="arrow-right">
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
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
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
                  <input type="text" value="4" />
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
