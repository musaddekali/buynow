import { useEffect, useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../context/firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './details.css';
import { Carousel } from 'react-responsive-carousel';
import { useGlobalContext } from '../../context/context';

const Details = () => {
  const [product, setProduct] = useState();
  const [qnt, setQnt] = useState(1);
  const { cart } = useGlobalContext();
  const { productId } = useParams();

  const qntPlus = () => {
    setQnt(q => q + 1);
  }

  const qntMinus = () => {
    qnt >= 2 && setQnt(q => q - 1);
  }

  const handleAddToCart = async () => {
    try {
      const { id, title, images, price } = product;
      const cartExistItem = cart.find(item => item.id === id);
      const ref = doc(db, 'cart', `${id}`);

      if (cartExistItem) {
        const data = {
          ...cartExistItem,
          quantity: cartExistItem.quantity + qnt
        }
        await updateDoc(ref, data);
        console.log('Updated item');
        return;
      }

      const data = {
        id,
        title,
        image: images[0],
        price,
        quantity: qnt,
        createdAt: Timestamp.fromDate(new Date()),
      }
      await setDoc(ref, data);
      console.log("New Item Added");
    } catch (e) {
      console.log('Add to cart item Error -> ', e);
    }
  }

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const ref = doc(db, 'products', productId);
        const item = await getDoc(ref);
        setProduct(item.data());
      } catch (e) {
        console.log("Details page err -> ", e);
      }
    }
    getSingleProduct();
  }, [])

  if (!product) {
    return (
      <h1>Loading...</h1>
    )
  }

  const { images, title, description, price } = product;
  return (
    <section className="product-details">
      <div className="container">
        <div className="section-title">
          <h3>Product Details</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="pd-img-wrap">
              <Carousel
                showIndicators={false}
                showArrows={true}
              >
                {
                  images.map((item, i) => (
                    <div key={i} className="pd-img">
                      <img
                        src={item}
                        alt='thumb'
                      />
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pd-text-wrap">
              <h4 className="pd-title">
                {title}
              </h4>
              <p className="pd-desc">
                {description}
              </p>
              <h4 className="pd-price secondary-clr">
                $<span>{price}</span>
              </h4>
              <div className="quantity-count-wrap">
                <span className="quantity-count-text">Quantity :</span>
                <div className="quantity-count-in">
                  <button
                    onClick={qntMinus}
                    className="btn primary-btn decrement-btn"
                  >
                    <BsDash />
                  </button>
                  <input type="text" readOnly value={qnt} />
                  <button
                    onClick={qntPlus}
                    className="btn primary-btn increment-btn"
                  >
                    <BsPlus />
                  </button>
                </div>
              </div>
              <div className="pd-action-btns">
                <button className="btn primary-btn">Buy Now</button>
                <button
                  onClick={handleAddToCart}
                  className="btn accent-btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
