import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import "../App.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <div className="div-cart-widget">
      <BsCart4 fontSize="2rem" color="blue" />
      {total > 0 && (
        <Badge bg="danger" className="ms-1">
          {total}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
