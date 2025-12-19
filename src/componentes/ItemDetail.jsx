import { useContext, useState } from "react";
import "../App.css";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };

  const stockActual = detalle.stock - itemQuantity(detalle.id);

  return (
    <div className="div-detail">
      <h2>Detalle del Producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} width="300px" />
      <p>Precio: ${detalle.price},00</p>
      <p>{detalle.description}</p>
      <p>Stock disponible: {stockActual} unidades</p>
      {purchase ? (
        <Link className="btn btn-dark" to="/cart">
          Ir a Carrito
        </Link>
      ) : (
        <ItemCount stock={stockActual} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
