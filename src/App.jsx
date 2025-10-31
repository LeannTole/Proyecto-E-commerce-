import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBS from "./componentes/NavbarBS";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
      <NavbarBS />
      <div className="div-container">
        <ItemListContainer mensaje="Tu tienda de motos online" />
      </div>
    </>
  );
}

export default App;
