import { useState } from "react";
import { GiFlexibleLamp } from "react-icons/gi";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <>
      {stock > 0 ? (
        <div
          className="d-flex gap-2 align-items-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button className="btn btn-danger" onClick={restar}>
            -
          </button>

          <span className="btn btn-light">{count}</span>

          <button className="btn btn-success" onClick={sumar}>
            +
          </button>

          <button
            className="btn btn-primary"
            onClick={() => onAdd(count)}
            disabled={stock === 0 || count === 0}
          >
            Comprar
          </button>
        </div>
      ) : (
        <p> Nos quedamos sin stock! </p>
      )}
    </>
  );
};

export default ItemCount;
