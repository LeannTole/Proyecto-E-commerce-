import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavbarBS() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="../logotienda.jpg" alt="logo" className="logo-tienda" />
        <Navbar.Brand as={NavLink} to="/">
          MotoShop!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Nuestras Motos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Honda">
                Honda
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Suzuki">
                Suzuki
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Kawasaki">
                Kawasaki
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Yamaha">
                Yamaha
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget counter={5} />{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;
