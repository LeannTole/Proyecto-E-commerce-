import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);
    const cantidadEnCarrito = itemInCart ? itemInCart.quantity : 0;
    const stockDisponible = item.stock;

    if (cantidadEnCarrito + qty > stockDisponible) {
      alert("No hay más stock disponible");
      return;
    }

    if (itemInCart) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + qty }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const itemQuantity = (id) => {
    const itemInCart = cart.find((prod) => prod.id === id);
    return itemInCart ? itemInCart.quantity : 0;
  };

  const updateQuantity = (id, value) => {
    setCart(
      cart
        .map((prod) => {
          if (prod.id === id) {
            const nuevaCantidad = prod.quantity + value;

            if (nuevaCantidad > prod.stock) return prod;
            if (nuevaCantidad <= 0) return null;

            return { ...prod, quantity: nuevaCantidad };
          }
          return prod;
        })
        .filter(Boolean)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        itemQuantity,
        updateQuantity,
        getTotalPrice,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
