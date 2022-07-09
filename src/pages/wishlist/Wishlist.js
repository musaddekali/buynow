import { useCallback, useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../context/firebase-config';
import './wishlist.css';
import WishlistItem from './WishlistItem';
import { useGlobalContext } from '../../context/context';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user, handleAddToCart } = useGlobalContext();

  /// Delete Wishlist Single Item
  const deleteSingleWishlistItem = async (itemId) => {
    if (window.confirm('Do you want to Remove this item?')) {
      try {
        const wishRef = doc(db, 'wishlist', user.uid, 'userWishlist', itemId.toString());
        await deleteDoc(wishRef);
        setWishlist((w) => w.filter(item => item.id !== itemId));
      } catch (e) {
        console.log('Wishtlist single item Deleting Problems -> ', e.message);
      }
    }
  }

  // Get all Wishlist 
  const getWishllist = useCallback(async () => {
    if(!user) return;
    try {
      const wishRef = collection(db, 'wishlist', user.uid, 'userWishlist');
      const q = query(wishRef, orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      let data = [];
      snap.forEach(item => data.push(item.data()));
      setWishlist(data);
    } catch (e) {
      console.log('Wishlist getting Problems -> ', e);
    }
  }, [user]);

  useEffect(() => {
    getWishllist();
  }, [getWishllist]);

  if (!wishlist.length) {
    return (
      <div className="container p-5">
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
                deleteSingleWishlistItem={deleteSingleWishlistItem}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
