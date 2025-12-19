import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ prod }) => {
  return (
    <div className="div-categorias">
      <img src={prod.img} alt={prod.name} width="200px" />
      <h2>{prod.name}</h2>
      <p>Precio: ${prod.price},00</p>
      <Link className="btn btn-warning mb-3" to={"/item/" + prod.id}>
        Descripcion
      </Link>
    </div>
  );
};

export default Item;
