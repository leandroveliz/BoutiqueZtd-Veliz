import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom";
import CartWidget from  './cartWidget'
import imagenLogo from '../imagen/logo.png'

const Menu = () =>{
    return(
      <Navbar className="colorHeader" expand="lg">
      <Container className="colorHeader">
        <Navbar.Brand><Link to="/"><img src={imagenLogo} className="imagenLogo"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/contactos" className="menu">Contactos</Link></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to="/categoria/ojotas" className="menu">Ojotas</Link>
              <br />
              <Link to="/categoria/pantalones" className="menu">Pantalones</Link>
              <br />
              <Link to="/categoria/remeras" className="menu">Remeras</Link>
              <br />
              <Link to="/categoria/ropaInterior"className="menu">Ropa Interior</Link>
              <br />
              <Link to="/categoria/zapatillas"className="menu">Zapatillas</Link>
              <br />
              <Link to="/categoria/zapatos"className="menu">Zapatos</Link>
            </NavDropdown>
            <Nav.Link><Link to="/categoria/carrito"><CartWidget /></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Menu;