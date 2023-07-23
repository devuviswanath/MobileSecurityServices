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
              <Nav.Link className="text-white " href="/">
                {" "}
                <i className="fas fa-home"></i> HOME
              </Nav.Link>
              {!user?._id && (
                <Nav.Link className="text-white " href="/login">
                  <i className="fas fa-user"></i>LOGIN
                </Nav.Link>
              )}
              {user?._id && (
                <Nav.Link className="text-white " href="/profile">
                  <i className="fas fa-user"></i>PROFILE
                </Nav.Link>
              )}
              {user?._id && (
                <Nav.Link className="text-white " href="/chat">
                  <i className="fas fa-comment"></i>CHAT
                </Nav.Link>
              )}

              {user?._id && (
                <Nav.Link
                  onClick={
                    user ? () => handleLogout() : () => navigate("/login")
                  }
                  href="/login"
                  className="border border-0 bg-transparent text-white text-uppercase"
                  type="button"
                >
                  LOGOUT
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
