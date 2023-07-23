import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ auth }) => auth);
  const handleLogout = () => {
    dispatch(logoutUser(user));
    localStorage.clear();
    // window.location.reload();
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand herf="/">
            {" "}
            <i className="fas fa-eye"></i> Third Eye{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="header">
              <Nav.Link href="/">
                {" "}
                <i className="fas fa-home"></i> HOME
              </Nav.Link>
              <Nav.Link href="/login">
                {" "}
                <i className="fas fa-user"></i> LOGIN
              </Nav.Link>
              {/* <Nav.Link href='/about'><i className='fas fa-info-circle'></i> ABOUT US </Nav.Link> */}
              <Nav.Link href="/chat">
                {" "}
                <i className="fas fa-comment"></i> CHAT{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
