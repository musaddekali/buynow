import './home.css';
import ProductCard from './ProductCard';

const Home = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
        </div>
        <div className="product-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    </section>
  );
};

export default Home;
