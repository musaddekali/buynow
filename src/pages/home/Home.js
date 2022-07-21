import { useEffect } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../context/firebase-config";
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';
import { useNavigate } from "react-router-dom";
import HomeLoading from "../../components/loading/HomeLoading";
import './home.css';

const Home = () => {
  const { user, products, handleAddToCart, showAlert, searchText, setSearchText } = useGlobalContext();
  const navigate = useNavigate();
  // Add Wishlist
  const handleAddToWishlist = async (itemId) => {
    if (!user) {
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

  useEffect(() => {
    setSearchText('');
  }, [setSearchText]);

  if (!products.length) {
    return <HomeLoading />
  }

  let productList = [];
  products.forEach(prod => {
    if (prod.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    productList.push(
      <ProductCard
        key={prod.id}
        product={prod}
        handleAddToCart={handleAddToCart}
        handleAddToWishlist={handleAddToWishlist}
      />
    )
  })


  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
        </div>
        <div className="product-list">
          {
            productList
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
