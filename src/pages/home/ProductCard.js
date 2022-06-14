import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase";
import { useGlobalContext } from "../../context/context";

const ProductCard = ({ product }) => {
  const { id, title, images, price } = product;
  const { cart } = useGlobalContext();

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
        console.log("Updated SuccessFully", cartExistItem);
        return;
      }
      // add 
      await setDoc(ref, {
        id,
        title,
        image: images[0],
        price,
        quantity: 1,
        createdAt: Timestamp.fromDate(new Date()),
      });
      console.log("New Item Added -> ");

    } catch (e) {
      console.log("Add To Cart Error -> ", e);
    }
  };

  return (
    <div className="d-flex align-items-stretch justify-content-center mb-2">
      <div className="card">
        <Link to={`/details/${id}`}>
          <img
            className="card-img-top"
            src={images[0]}
            title={title}
            alt={title}
          />
        </Link>
        <div className="card-body">
          <Link to={`/details/${id}`} className="card-title" title={title}>
            {`${title.substring(0, 100)}...`}
          </Link>
          <h4 className="card-price secondary-clr">
            $<span>{price}</span>
          </h4>
          <button title="Add to Wishlist" className="btn card-wishlist">
            <BsHeart />
          </button>
          <button
            onClick={() => handleAddToCart(id)}
            className="btn accent-btn btn-block"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
