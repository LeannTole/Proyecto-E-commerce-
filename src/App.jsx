import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBS from "./componentes/NavbarBS";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error";
import { CartProvider } from "./context/CartContext";
import ItemCount from "./componentes/ItemCount";
import CartContainer from "./componentes/CartContainer";
import Checkout from "./componentes/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarBS />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje="Tu tienda de motos online:" />}
          />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
