import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h2>
                <Link className="text-white" to="/">
                  <img className="logo-img" src="/images/logo.png" alt="logo" />
                </Link>
                <Link className="text-white " to="/">
                  Third Eye
                </Link>
              </h2>
            </div>

            <div className="col-8">
              <div className="menu-bottom d-flex align-items-center">
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      HOME
                    </NavLink>
                    <div>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-item-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>SERVICES</span>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 2
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 3
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink className="text-white" to="/About">
                      ABOUT US
                    </NavLink>
                    <NavLink className="text-white" to="/ContactUs">
                      CONTACT US
                    </NavLink>
                    <Link className="text-white" to="/OurStore">
                      OUR STORE
                    </Link>
                    <Link className="text-white" to="/Login">
                      LOGOUT
                    </Link>
                    <NavLink className="text-white" to="/Login">
                      LOGIN
                    </NavLink>
                    <NavLink className="text-white" to="/Orders">
                      ORDERS
                    </NavLink>
                    <NavLink className="text-white" to="/Cart">
                      <AiOutlineShoppingCart
                        className="fs-3"
                        style={{ color: "white" }}
                      />
                    </NavLink>
                    <div>
                      <NavLink className="text-white" to="/Profile">
                        <FaRegUser
                          className="fs-3"
                          style={{ color: "white" }}
                        />
                        Profile
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
