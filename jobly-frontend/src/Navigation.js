import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

/**
 * Navigation:
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation -> Navlink
 */
function Navigation() {
  console.log("Navigation");

  return (
    <Navbar bg="light" sticky="top" className="Navigation">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Jobly</NavLink>
        </Navbar.Brand>
        <Nav className="nav-right">
          <Nav.Link as="span">
            <NavLink to="/companies">Companies</NavLink>
          </Nav.Link>
          <Nav.Link as="span">
            <NavLink to="/jobs">Jobs</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
