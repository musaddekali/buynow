import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../context/firebase-config";
import './home.css';
import ProductCard from './ProductCard';
import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { products, handleAddToCart } = useGlobalContext();

  // // if product available on cart then update it otherwise add
  // const handleAddToCart = async (itemId) => {
  //   try {
  //     const ref = doc(db, "cart", `${itemId}`);
  //     const cartExistItem = cart.find((item) => item.id === itemId);
  //     if (cartExistItem) {
  //       // update 
  //       await updateDoc(ref, {
  //         ...cartExistItem,
  //         quantity: cartExistItem.quantity + 1,
  //       });
  //       return;
  //     }
  //     // add 
  //     const newItem = products.find(item => item.id === itemId);
  //     const { id, title, images, price } = newItem;
  //     if (newItem) {
  //       await setDoc(ref, {
  //         id,
  //         title,
  //         image: images[0],
  //         price,
  //         quantity: 1,
  //         createdAt: Timestamp.fromDate(new Date()),
  //       });
  //     }
  //   } catch (e) {
  //     console.log("Add To Cart Error -> ", e);
  //   }
  // };

  // Add Wishlist
  const handleAddToWishlist = async (itemId) => {
    try {
      const ref = doc(db, 'wishlist', `${itemId}`);
      const currentItem = products.find(item => item.id === itemId);
      const { id, images, title, price } = currentItem;
      const data = {
        id,
        image: images[0],
        title,
        price,
        createdAt: Timestamp.fromDate(new Date())
      }
      await setDoc(ref, data);
      console.log('Wishlist item added. Id = ', itemId);
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
