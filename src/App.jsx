import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBS from "./componentes/NavbarBS";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error";

function App() {
  return (
    <BrowserRouter>
      <NavbarBS />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="Tu tienda de motos online:" />}
        />
        <Route path="/categoria/:type" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
