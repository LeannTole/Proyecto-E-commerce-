import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const EmptyCart = () => {
  return (
    <div className="div-alertas">
      <h1>No hay productos en el carrito!</h1>
      <h3>Puedes buscar lo que necesites!</h3>
      <Link className="btn btn-primary" to="/">
        Volver a la tienda
      </Link>
    </div>
  );
};

export default EmptyCart;
