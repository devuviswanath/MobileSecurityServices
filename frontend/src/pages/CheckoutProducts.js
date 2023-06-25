import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit=""
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value=""
                    onChange=""
                    onBlur=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="canada">Canada</option>
                  </select>
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="form-control"
                    name="number"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                    name="other"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value=""
                    onChange=""
                    onBlur=""
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    value=""
                    onChange=""
                    onBlur=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="ontario">Ontario</option>
                  </select>
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                    name="pincode"
                  />
                  <div className="error ms-2 my-1"></div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/Cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 500</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 500</h5>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/" className="button">
                  Continue to Shipping
                </Link>
                <button className="button" type="submit">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
