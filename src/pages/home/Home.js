import { doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase";
import './home.css';
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { products, cart } = useGlobalContext();

  // if product available on cart then update it otherwise add
  const handleAddToCart = async (itemId) => {
    try {
      const ref = doc(db, "cart", `${itemId}`);
      const cartExistItem = cart.find((item) => item.id === itemId);
      if (cartExistItem) {
        // update 
        await updateDoc(ref, {
          ...cartExistItem,
          quantity: cartExistItem.quantity + 1,
        });
        return;
      }
      // add 
      const newItem = products.find(item => item.id === itemId);
      const { id, title, images, price } = newItem;
      if (newItem) {
        await setDoc(ref, {
          id,
          title,
          image: images[0],
          price,
          quantity: 1,
          createdAt: Timestamp.fromDate(new Date()),
        });
      }
    } catch (e) {
      console.log("Add To Cart Error -> ", e);
    }
  };

  // Add Wishlist
  const handleAddToWishlist = () => {
    console.log('Added to wishlist');
  }

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
        </div>
        <div className="product-list">
          {
            products.map(pro => (
              <ProductCard
                key={pro.id}
                product={pro}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
