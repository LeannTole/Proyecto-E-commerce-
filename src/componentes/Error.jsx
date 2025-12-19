import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="div-alertas">
      <h1>Error, pagina no encontrada </h1>
      <Link className="btn btn-dark" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};
export default Error;
