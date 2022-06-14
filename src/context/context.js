import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

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

    // Get App Products 
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
                console.log('Firestore Products retrieved :)');
            } catch (e) {
                console.log('Firestore getDocs Error -> ', e);
            }
        }
        getProducts();
    }, [])

    // Get Cart Realtile Update
    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "cart"),
            (snapshot) => {
                let cart = [];
                snapshot.forEach(item => {
                    cart.push(item.data());
                })
                setCart(cart);
                console.log('Cart Realtime Data', cart);
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
            totalQuantity
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}