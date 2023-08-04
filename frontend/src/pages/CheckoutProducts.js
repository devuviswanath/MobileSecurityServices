import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { base_url } from "../utils/axiosConfig";
import { createProductOrder, emptyCart } from "../features/user/userSlice";
const phoneRegExp =
  /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/;
const emailRegExp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

const shippingSchema = yup.object({
  fullName: yup.string().required("Full name is Required"),
  email: yup
    .string()
    .nullable()
    .matches(emailRegExp, "Please enter a valid email (test@gmail.com)")
    .email("Email should be valid")
    .required("Email address is required"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Please enter a 10 digit valid phone number")
    .required("Mobile Number is Required"),
  address: yup.string().required("Address Details are Required"),
  city: yup.string().required("city is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("country is Required"),
  pincode: yup.string().required("Zipcode is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [cartProductState, setCartProductState] = useState([]);
  const user = useSelector((state) => state?.auth);
  let userId = user.user._id;
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      axios
        .post(`${base_url}stripe/create-checkout-session`, {
          cartState,
          userId,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        });

      setTimeout(() => {
        handleCheckout(values);
      }, 300);
    },
  });
  useEffect(() => {
    let item = [];
    for (let index = 0; index < cartState?.length; index++) {
      item.push({
        product: cartState[index]?.productId?._id,
        quantity: cartState[index]?.quantity,
        price: cartState[index]?.price,
      });
    }
    setCartProductState(item);
  }, []);

  const handleCheckout = (values) => {
    dispatch(
      createProductOrder({
        totalPrice: totalAmount,
        orderItems: cartProductState,
        shippingInfo: values,
      })
    );
    dispatch(emptyCart());
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/Cart" className="text-dark">
                  <BiArrowBack className="me-2" />
                  Return to Cart
                </Link>
              </div>
            </div>
            <div className="checkout-left-data">
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="canada">Canada</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {" "}
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange("fullName")}
                    onBlur={formik.handleBlur("fullName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.fullName && formik.errors.fullName}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="form-control"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error ms-2 my-1">
                    {" "}
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="ontario">Ontario</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error ms-2 my-1">
                    {" "}
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="button border border-dark">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  $ {totalAmount ? totalAmount : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                $ {totalAmount ? totalAmount + 5 : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
