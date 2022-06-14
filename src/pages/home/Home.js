import './home.css';
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { products } = useGlobalContext();

  console.log('environ key->', process.env.REACT_APP_APP_ID)

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
        </div>
        <div className="product-list">
          {
            products.map(pro => (
              <ProductCard key={pro.id} product={pro} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
