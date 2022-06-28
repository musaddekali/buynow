import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    Timestamp,
    updateDoc
} from 'firebase/firestore';
import { db } from './firebase-config';

const AppContext = React.createContext();
AppContext.displayName = 'AppGlobalContext';

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);


    // Handle Add To Cart (If there item is available then update it otherwise add)
    const handleAddToCart = async (path, itemId, qnt = 1) => {
        try {
            const ref = doc(db, path, `${itemId}`);
            const cartExistItem = cart.find((item) => item.id === itemId);
            if (cartExistItem) {
                // update 
                await updateDoc(ref, {
                    ...cartExistItem,
                    quantity: cartExistItem.quantity + qnt,
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
                    quantity: qnt,
                    createdAt: Timestamp.fromDate(new Date()),
                });
            }
        } catch (e) {
            console.log("Add To Cart Error -> ", e);
        }
    }

    // Delete Item handler
    const handleDelete = async (path, id, message = 'Are you sure?') => {
        if (window.confirm(message)) {
            try {
                const ref = doc(db, path, `${id}`);
                await deleteDoc(ref);
                console.log('Deleted from ', path, id);
            } catch (e) {
                console.log(path, 'Delete error -> ', e);
            }
        }
    }

    // Get Total Ammount 
    useEffect(() => {
        const getTotal = () => {
            const { totalCost, quantity } = cart.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalCost += itemTotal;
                cartTotal.quantity += quantity;
                return cartTotal;
            }, { totalCost: 0, quantity: 0 });
            setTotalMoney(totalCost);
            setTotalQuantity(quantity);
        }
        getTotal();
    }, [cart]);


    // Get All Products 
    useEffect(() => {
        const getProducts = async () => {
            try {
                const ref = collection(db, 'products');
                const q = query(ref, orderBy('id'));
                const docs = await getDocs(q);
                let data = [];
                docs.forEach(doc => {
                    data.push(doc.data());
                });
                setProducts(data);
            } catch (e) {
                console.log('Firestore getDocs Error -> ', e);
            }
        }
        getProducts();
    }, [])


    // Get Cart Realtile Update
    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "cart"), orderBy('createdAt', 'desc')),
            (snapshot) => {
                let cart = [];
                snapshot.forEach(item => {
                    cart.push(item.data());
                })
                setCart(cart);
            },
            (error) => {
                console.log("Cart Realtime Data Error -> ", error);
            });
        return () => unsubscribe();
    }, []);


    return (
        <AppContext.Provider value={{
            products,
            cart,
            totalMoney,
            totalQuantity,
            handleAddToCart,
            handleDelete
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}