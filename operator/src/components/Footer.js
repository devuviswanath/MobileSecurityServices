import React from "react";

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
            <div className="col-8">
              <div className="footer-link d-flex flex-column">
                <p className="text-center mb-0 text-white">
                  &copy;{new Date().getFullYear()}; ThirdEye limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
