import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [invalid, setInvalid] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);

  if (invalid) {
    return (
      <div className="div-alertas">
        <p style={{ color: "red" }}>El producto no existe❌</p>
        <Link className="btn btn-primary" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }
  if (cargando) {
    return <LoaderComponent texto="Cargando Detalle del Producto" />;
  }

  if (!detalle) {
    return <p>Producto no encontrado</p>;
  }

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
