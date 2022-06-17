import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../context/firebase-config';
import './wishlist.css';
import WishlistItem from './WishlistItem';
import { useGlobalContext } from '../../context/context';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const {handleAddToCart, handleDelete } = useGlobalContext();

  // Get all Wishlist 
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'wishlist'), orderBy('createdAt', 'desc')),
      (snapshot) => {
        let data = [];
        snapshot.forEach(doc => data.push(doc.data()));
        setWishlist(data);
      },
      (err) => {
        console.log('Wishlist Get Data error ->', err);
      });
    return () => unsub();
  }, []);

  if (!wishlist.length) {
    return (
      <div className="container">
        <h1>Your Wishlist is Empty</h1>
      </div>
    )
  }

  return (
    <section className="wishlist">
      <div className="container">
        <div className="section-title">
          <h3>My Wishlist {wishlist.length} item</h3>
        </div>
        <div className="wishlist-items">
          {
            wishlist.map(item => (
              <WishlistItem
                key={item.id}
                wishlist={item}
                handleAddToCart={handleAddToCart}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
