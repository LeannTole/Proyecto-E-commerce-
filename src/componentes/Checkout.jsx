import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validarEmail, setValidarEmail] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      setError("No hay productos en el carrito");
      return;
    }

    if (
      !buyer.name ||
      !buyer.lastname ||
      !buyer.phone ||
      !buyer.address ||
      !buyer.email
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (buyer.email !== validarEmail) {
      setError("Los emails no coinciden");
      return;
    }

    setLoading(true);

    const orden = {
      comprador: buyer,
      items: cart,
      total: getTotalPrice(),
      fecha: serverTimestamp(),
    };

    const pedidosRef = collection(db, "orders");

    addDoc(pedidosRef, orden)
      .then((res) => {
        setOrdenId(res.id);
        clearCart();
      })
      .catch(() => {
        setError("Ocurrió un error al generar la orden");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {ordenId ? (
        <div
          className="container mt-5"
          style={{
            color: "green",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <h2>¡Gracias por su compra!</h2>
          <h4>Su número de orden es:</h4>
          <strong>{ordenId}</strong>

          <div className="mt-3">
            <Link className="btn btn-primary" to="/">
              Volver a la tienda
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <h1>Checkout</h1>

          <form className="mb-3" onSubmit={finalizarCompra}>
            {error && (
              <span
                style={{
                  color: "red",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {error}
              </span>
            )}

            <input
              type="text"
              placeholder="Nombre"
              className="form-control mb-2"
              name="name"
              onChange={buyerData}
            />

            <input
              type="text"
              placeholder="Apellido"
              className="form-control mb-2"
              name="lastname"
              onChange={buyerData}
            />

            <input
              type="text"
              placeholder="Teléfono"
              className="form-control mb-2"
              name="phone"
              onChange={buyerData}
            />

            <input
              type="text"
              placeholder="Dirección"
              className="form-control mb-2"
              name="address"
              onChange={buyerData}
            />

            <input
              type="email"
              placeholder="Email"
              className="form-control mb-2"
              name="email"
              onChange={buyerData}
            />

            <input
              type="email"
              placeholder="Repetir Email"
              className="form-control mb-2"
              onChange={(e) => {
                setValidarEmail(e.target.value);
                setError("");
              }}
            />

            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading || cart.length === 0}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Generando orden...
                </>
              ) : (
                "Generar Orden"
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
