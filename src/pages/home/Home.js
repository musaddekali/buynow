import './home.css';
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { products } = useGlobalContext();

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
