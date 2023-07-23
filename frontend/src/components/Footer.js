import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Info</h4>
              <div>
                <address className="text-white fs-6">
                  75 Watline Ave,
                  <br />
                  Mississauga,Toronto,
                  <br />
                  Ontario,Canada
                </address>
                <a
                  href="tel: +1 4756478756"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +1 (475)-647-8756
                </a>
                <a
                  href="mailto: mobilesecurityservices@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  mobilesecurityservices@gmail.com
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/OurStore" className="text-white py-2 mb-l">
                  Our Store
                </Link>
                <Link to="/ContractPolicy" className="text-white py-2 mb-l">
                  Contracts
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/About" className="text-white py-2 mb-l">
                  About Us
                </Link>
                <Link to="/ContactUs" className="text-white py-2 mb-l">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Social Media</h4>
              <div className="footer-link d-flex flex-column">
                <Link
                  className="text-white py-2 mb-l"
                  to="https://www.facebook.com/"
                >
                  <BsFacebook className="fs-3" style={{ color: "white" }} />
                </Link>
                <Link
                  className="text-white py-2 mb-l"
                  to="https://twitter.com/home"
                >
                  <BsTwitter className="fs-3" style={{ color: "white" }} />
                </Link>
                <Link
                  className="text-white py-2 mb-l"
                  to="https://www.youtube.com/"
                >
                  <BsYoutube className="fs-3" style={{ color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className=".col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; ThirdEye limited
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
