import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useLocation, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import { base_url } from "../utils/axiosConfig";
import { useFormik } from "formik";
import { getAService } from "../features/services/servicesSlice";
import { createServiceOrder } from "../features/user/userSlice";

const billingSchema = yup.object({
  fullName: yup.string().required("Full name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email address is required"),
  mobile: yup.string().required("Mobile Number is Required"),
  contract_type: yup.string().required("Contract Type is Required"),
  address: yup.string().required("Address Details are Required"),
  city: yup.string().required("city is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("country is Required"),
  pincode: yup.string().required("Zipcode is Required"),
});
const CheckoutService = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getServiceId = location.pathname.split("/")[2];
  const serviceState = useSelector((state) => state?.service?.singleservice);
  const [billingInfo, setBillingInfo] = useState(null);
  const [ordrerdServiceState, setOrdrerdServiceState] = useState([]);
  const user = useSelector((state) => state?.auth);
  let userId = user.user._id;
  useEffect(() => {
    dispatch(getAService(getServiceId));
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      contract_type: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: billingSchema,
    onSubmit: (values) => {
      let contractType = values.contract_type;
      setBillingInfo(values);
      axios
        .post(`${base_url}stripe/create-service-checkout-session`, {
          serviceState,
          contractType,
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
    if (serviceState) {
      item.push({
        service: serviceState._id,
        per_price: serviceState.per_price,
        tem_price: serviceState.tem_price,
      });
    }
    setOrdrerdServiceState(item);
  }, []);

  const handleCheckout = (values) => {
    let totalAmount = 0;
    let startDate1, startDate, EndDate;
    if (values.contract_type == "permanent") {
      totalAmount = serviceState?.per_price;
      startDate = new Date();
      startDate.toLocaleDateString();
      startDate.setDate(startDate.getDate() + 365);
      startDate1 = new Date(startDate).toLocaleString();
      EndDate = startDate1.split(",")[0];
    } else {
      totalAmount = serviceState?.tem_price;
      startDate = new Date();
      startDate.toLocaleDateString();
      startDate.setDate(startDate.getDate() + 30);
      startDate1 = new Date(startDate).toLocaleString();
      EndDate = startDate1.split(",")[0];
    }
    console.log("EndDate", EndDate);
    dispatch(
      createServiceOrder({
        totalPrice: totalAmount,
        expiredDate: EndDate,
        orderItems: ordrerdServiceState,
        billingInfo: values,
      })
    );
  };
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <Link
                  to={"/SingleService/" + getServiceId}
                  className="text-dark"
                >
                  <BiArrowBack className="me-2" />
                  Return to Service
                </Link>
              </div>
            </div>
            <div className="checkout-left-data">
              <h4 className="mb-3">Billing Information</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
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
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="contract_type"
                    value={formik.values.contract_type}
                    onChange={formik.handleChange("contract_type")}
                    onBlur={formik.handleBlur("contract_type")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Contract Type
                    </option>
                    <option value="permanent">Permanent</option>
                    <option value="temporary">Temporary</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.contract_type &&
                      formik.errors.contract_type}
                  </div>
                </div>
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
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
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
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="button" type="submit">
                      Payment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutService;
