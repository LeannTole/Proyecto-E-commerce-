import React from "react";
import "../App.css";

const ItemDetail = ({ detalle }) => {
  return (
    <div className="div-detail">
      <h2>Detalle del Producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} width="300px" />
      <p>Precio: ${detalle.price},00</p>
      <p> {detalle.description}</p>
      <p>Stock disponible: {detalle.stock}</p>
    </div>
  );
};

export default ItemDetail;
