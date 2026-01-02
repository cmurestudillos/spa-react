import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="mb-4">
      <Navbar.Brand as={Link} to="/">
        <span className="badge badge-primary p-2 mr-2">SH</span>
        SuperHeroes App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/heroes" className={location.pathname === '/heroes' ? 'active' : ''}>
            Héroes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
