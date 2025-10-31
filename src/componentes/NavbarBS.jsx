import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

function NavbarBS() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="../logotienda.jpg" alt="logo" className="logo-tienda" />
        <Navbar.Brand href="#home">Bienvenidos a mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Nuestras Motos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Honda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Suzuki</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kawasaki</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">Yamaha</NavDropdown.Item>
              <CartWidget counter={5} />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;
