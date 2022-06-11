import {Link} from 'react-router-dom'
import './home.css';
import Img from "../../assets/images/coffeeCup.jpg";

const Home = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
        </div>
        <div className="product-list">
          <div className="d-flex align-items-stretch justify-content-center mb-2">
            <div className="card">
              <Link to="/details">
                <img className="card-img-top" src={Img} alt="product" />
              </Link>
              <div className="card-body">
                <Link to="/details" className="card-title">
                  Some quick example text to build on...
                </Link>
                <h4 className="card-price secondary-clr">
                  $ <span>250.99</span>
                </h4>
                <button title="Add to Wishlist" className="btn card-wishlist">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </span>
                </button>
                {/* <button className="btn accent-btn btn-block">Add Cart</button> */}
                <Link
                  to="/cart"
                  className="btn accent-btn btn-block"
                  title="Add to Cart"
                >
                  Add Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
