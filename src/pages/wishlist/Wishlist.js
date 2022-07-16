import { useCallback, useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../context/firebase-config';
import './wishlist.css';
import WishlistItem from './WishlistItem';
import { useGlobalContext } from '../../context/context';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user, handleAddToCart, showAlert } = useGlobalContext();

  /// Delete Wishlist Single Item
  const deleteSingleWishlistItem = async (itemId) => {
    if (window.confirm('Do you want to Remove this item?')) {
      try {
        setWishlist(wishlist.filter(item => item.id !== itemId));
        showAlert('Wishlist Item Deleted');
        const wishRef = doc(db, 'wishlist', user.uid, 'userWishlist', itemId.toString());
        await deleteDoc(wishRef);
      } catch (e) {
        console.log('Wishtlist single item Deleting Problems -> ', e.message);
      }
    }
  }

  /// Clear All Wishlist items
  function clearWishlistHistory() {
    if (window.confirm('Do you want to clear all Wishlist items?')) {
      const orderRef = collection(db, 'wishlist', user.uid, 'userWishlist');
      setWishlist([]);
      showAlert('All Wishlist item has cleared');
      deleteCollection(orderRef);
    }
  }

  async function deleteCollection(collectionRef) {
    try {
      const colSnap = await getDocs(collectionRef);
      let docId = [];
      colSnap.forEach(item => {
        docId.push(item.data().id);
      })
      docId.forEach(async id => {
        await deleteDoc(doc(collectionRef, id.toString()));
      })
    } catch (e) {
      console.log("cart Collection delete Problems -> ", e)
    }
  }

  // Get all Wishlist 
  const getWishllist = useCallback(async () => {
    if (!user) return;
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
        {wishlist.length > 2 && (
          <div className="clear-history mb-3">
            <button
              onClick={clearWishlistHistory}
              className="btn primary-btn"
            >
              Clear All
            </button>
          </div>
        )}
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
