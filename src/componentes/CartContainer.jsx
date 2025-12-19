import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartView from "./CartView";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <CartView />;
};

export default CartContainer;
