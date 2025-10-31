import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import "../App.css";
const CartWidget = (counter) => {
  return (
    <div className="div-cart-widget">
      <BsCart4 fontSize={"2rem"} color="blue" />
      <Badge bg="danger">{counter.counter}</Badge>
    </div>
  );
};

export default CartWidget;
