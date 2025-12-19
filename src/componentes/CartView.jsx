import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, removeItem, clearCart, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h3>El carrito está vacío</h3>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {cart.map((compra) => (
        <div
          key={compra.id}
          style={{
            border: "1px solid black",
            margin: 10,
            padding: 10,
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={compra.img} alt={compra.name} style={{ width: "150px" }} />

          <div>
            <h4>{compra.name}</h4>
            <p>Precio: ${compra.price}</p>
            <p>Cantidad: {compra.quantity}</p>
            <p>Subtotal: ${compra.price * compra.quantity}</p>

            <button
              className="btn btn-secondary"
              onClick={() => updateQuantity(compra.id, -1)}
            >
              -
            </button>

            <button
              className="btn btn-secondary mx-2"
              onClick={() => updateQuantity(compra.id, 1)}
            >
              +
            </button>

            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <h3>Total del carrito: ${getTotalPrice()},00</h3>

      <button className="btn btn-danger" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link className="btn btn-success mx-2" to="/Checkout">
        Finalizar compra
      </Link>
    </div>
  );
};

export default CartView;
