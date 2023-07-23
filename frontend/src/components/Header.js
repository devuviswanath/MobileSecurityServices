import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { logoutUser } from "../features/user/userSlice";
import { getAllServices } from "../features/services/servicesSlice";
const Header = () => {
  const location = useLocation();

  const getPage = location.pathname.split("/")[1];

  let isServicePage;

  if (getPage == "SingleService") {
    isServicePage = true;
  }
  const { user } = useSelector(({ auth }) => auth);
  const serviceState = useSelector((state) => state?.service?.service);
  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser(user));
    localStorage.clear();
    window.location.reload();
  };
  const handleService = (id) => {
    navigate("/SingleService/" + id);
    window.location.reload();
  };
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
                          style={{ width: "310px" }}
                        >
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              onClick={() =>
                                handleService(serviceState[0]?._id)
                              }
                            >
                              {serviceState && serviceState[0]?.title}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              onClick={() =>
                                handleService(serviceState[1]?._id)
                              }
                            >
                              {serviceState && serviceState[1]?.title}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              onClick={() =>
                                handleService(serviceState[2]?._id)
                              }
                            >
                              {serviceState && serviceState[2]?.title}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item text-white"
                              onClick={() =>
                                handleService(serviceState[3]?._id)
                              }
                            >
                              {serviceState && serviceState[3]?.title}
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
                    {user?._id && (
                      <Link
                        onClick={
                          user ? () => handleLogout() : () => navigate("/")
                        }
                        to="/"
                        className="border border-0 bg-transparent text-white text-uppercase"
                        type="button"
                      >
                        LOGOUT
                      </Link>
                    )}
                    {!user?._id && (
                      <NavLink className="text-white" to="/login">
                        LOGIN
                      </NavLink>
                    )}
                    {user?._id && (
                      <NavLink className="text-white" to="/Orders">
                        ORDERS
                      </NavLink>
                    )}
                    {user?._id && (
                      <NavLink className="text-white" to="/Cart">
                        <AiOutlineShoppingCart
                          className="fs-3"
                          style={{ color: "white" }}
                        />
                      </NavLink>
                    )}
                    {user?._id && (
                      <NavLink className="text-white" to="/Chat">
                        <BsFillChatDotsFill
                          className="fs-3"
                          style={{ color: "white" }}
                        />
                      </NavLink>
                    )}
                    {user?._id && (
                      <div>
                        <NavLink className="text-white" to="/Profile">
                          <FaRegUser
                            className="fs-3"
                            style={{ color: "white" }}
                          />
                          Profile
                        </NavLink>
                      </div>
                    )}
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
