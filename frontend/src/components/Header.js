import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { logoutUser } from "../features/user/userSlice";
const Header = () => {
  const authState = useSelector((state) => state.auth);
  console.log("authstate", authState);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(authState.user));
    localStorage.clear();
    window.location.reload();
  };
  // useEffect(() => {
  //   if (authState == null && authState.isSuccess === true) {
  //     navigate("/Login");
  //   }
  // }, [authState]);
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
                            <NavLink
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 1
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 2
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              to="/SingleService"
                            >
                              Service 3
                            </NavLink>
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
                    <NavLink className="text-white" to="/OurStore">
                      OUR STORE
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="border border-0 bg-transparent text-white text-uppercase"
                      type="button"
                    >
                      LOGOUT
                    </button>

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
                    <NavLink className="text-white" to="/Chat">
                      <BsFillChatDotsFill
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
