import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom";
import CartWidget from  './cartWidget'
import imagenLogo from '../imagen/logo.png'

const Menu = () =>{
    return(
      
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand><Link to="/"><img src={imagenLogo} className="imagenLogo"></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/contactos" className="menu h4" style={{ color: 'white' }}>Contactos</Link></Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown" className="h4">
                <div style={{ background: 'burlywood', color: 'white' }}>
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/categoria/ojotas" className="menu" style={{ color: 'white' }}>Ojotas</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/categoria/pantalones" className="menu" style={{ color: 'white' }}>Pantalones</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link to="/categoria/remeras" className="menu" style={{ color: 'white' }}>Remeras</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <Link to="/categoria/ropainterior" className="menu" style={{ color: 'white' }}>Ropa Interior</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    <Link to="/categoria/zapatillas" className="menu" style={{ color: 'white' }}>Zapatillas</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    <Link to="/categoria/zapatos" className="menu" style={{ color: 'white' }}>Zapatos</Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link><Link to="/categoria/carrito"><CartWidget /></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Menu;