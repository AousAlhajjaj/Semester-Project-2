import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cart);
  }, []);

  const toggleProduct = product => {
    const productIndex = cart.findIndex(item => item.id === product.id);
    if (productIndex > -1) {
      cart.splice(productIndex, 1);
    } else {
      cart.push(product);
    }
    setCart([...cart]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return <CartContext.Provider value={[cart, toggleProduct]}>{children}</CartContext.Provider>;
}
