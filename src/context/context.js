import React, { useEffect, useState, useContext } from "react";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();
AppContext.displayName = "BuyNowGlobalContext";

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [alert, setAlert] = useState({ show: false, msg: '' });
    const navigate = useNavigate();

    // Handle Add To Cart (If there item is available then update it otherwise add)
    // Function Argument is ( Product ID, Product Quantity(optional))
    const handleAddToCart = async (itemId, qnt = 1) => {
        if (!user) {
            navigate('/login');
            return;
        };
        try {
            const cartRef = doc(db, "cart", user.uid, "userCart", itemId.toString());
            const cartExistItem = cart.find((item) => item.id === itemId);
            if (cartExistItem) {
                // update
                showAlert('Updated Quantity for this product.');
                await updateDoc(cartRef, {
                    ...cartExistItem,
                    quantity: cartExistItem.quantity + qnt,
                });
                return;
            }
            // add
            const newItem = products.find((item) => item.id === itemId);
            const { id, title, images, price } = newItem;
            if (newItem) {
                showAlert('Product Added.');
                await setDoc(cartRef, {
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
    };

    // Get Total Ammount
    useEffect(() => {
        const getTotal = () => {
            const { totalCost, quantity } = cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalCost += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                { totalCost: 0, quantity: 0 }
            );
            setTotalMoney(totalCost);
            setTotalQuantity(quantity);
        };
        getTotal();
    }, [cart]);

    // Get All Products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const ref = collection(db, "products");
                const q = query(ref, orderBy("id"));
                const docs = await getDocs(q);
                let data = [];
                docs.forEach((doc) => {
                    data.push(doc.data());
                });
                setProducts(data);
            } catch (e) {
                console.log("Firestore getDocs Error -> ", e);
            }
        };
        getProducts();
    }, []);

    // Get Cart Realtile Update
    useEffect(() => {
        if (!user) {
            setCart([]);
            return;
        }
        const cartRef = collection(db, "cart", user.uid, "userCart");
        const unsubscribe = onSnapshot(
            query(cartRef, orderBy("createdAt", "desc")),
            (snapshot) => {
                let cart = [];
                snapshot.forEach((item) => {
                    cart.push(item.data());
                });
                setCart(cart);
            },
            (error) => {
                console.log("Cart Realtime Data Error -> ", error);
            }
        );
        return () => unsubscribe();
    }, [user]);

    /// Get User Auth State and Data
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                getDoc(doc(db, "users", uid))
                    .then((snap) => {
                        setUser(snap.data());
                    })
                    .catch((e) => {
                        console.log("Current User State Getting Problems", e);
                    });
            } else {
                setUser(null);
            }
        });
    }, []);

    /// ALERT
    const showAlert = (msg = '', show = true) => {
        setAlert({ show, msg });
    }

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                products,
                handleAddToCart,
                cart,
                totalMoney,
                totalQuantity,
                alert,
                showAlert
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
