import './wishlist.css';
import WishlistItem from './WishlistItem';

const Wishlist = () => {
  return (
    <section className="wishlist">
      <div className="container">
        <div className="section-title">
          <h3>My Wishlist</h3>
        </div>
        <div className="wishlist-items">
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
