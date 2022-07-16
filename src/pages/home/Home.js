import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../context/firebase-config";
import './home.css';
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {user, products, handleAddToCart, showAlert } = useGlobalContext();
  const navigate = useNavigate();
  // Add Wishlist
  const handleAddToWishlist = async (itemId) => {
    if(!user) {
      navigate('/login');
      return;
    }
    try {
      showAlert('Wishlist Item Added');
      const wishRef = doc(db, 'wishlist', user.uid, 'userWishlist', `${itemId}`);
      const currentItem = products.find(item => item.id === itemId);
      const { id, images, title, price } = currentItem;
      const data = {
        id,
        image: images[0],
        title,
        price,
        createdAt: Timestamp.fromDate(new Date())
      }
      await setDoc(wishRef, data);
    } catch (e) {
      console.log('Item Wishlist adding problem -> ', e);
    }
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
