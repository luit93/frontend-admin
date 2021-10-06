import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import { userLogOut } from "../../pages/admin-user/userAction";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/dashboard">Eshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/admin-profile">
                <i className="fas fa-user-cog"></i>
              </Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  dispatch(userLogOut());
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
