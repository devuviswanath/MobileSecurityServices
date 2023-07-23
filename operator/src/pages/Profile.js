import React, { useState } from "react";
import Container from "../components/Container";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateProfile } from "../features/auth/authSlice";
import { FiEdit } from "react-icons/fi";

const phoneRegExp =
  /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/;
const emailRegExp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
const profileSchema = yup.object({
  fullname: yup.string().required("Fullname is required"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Please enter a 10 digit valid phone number")
    .required("Mobile number is required"),
  email: yup
    .string()
    .matches(emailRegExp, "Please enter a valid email (test@gmail.com)")
    .email("Email should be valid")
    .required("Email address is required"),
});
const Profile = () => {
  const getTokenfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const config2 = {
    headers: {
      authorization: `Bearer ${
        getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullname: userState?.fullname,
      mobile: userState?.mobile,
      email: userState?.email,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile({ data: values, config2: config2 }));
      setEdit(true);
    },
  });
  return (
    <>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-3">Update Profile</h3>
              <FiEdit className="fs-3" onClick={() => setEdit(false)} />
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  disabled={edit}
                  id="example1"
                  value={formik.values.fullname}
                  onChange={formik.handleChange("fullname")}
                  onBlur={formik.handleChange("fullname")}
                />
                <div className="error">
                  {formik.touched.fullname && formik.errors.fullname}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="example2" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  disabled={edit}
                  id="example2"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleChange("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  disabled={edit}
                  id="exampleInputEmail1"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleChange("email")}
                  aria-describedby="emailHelp"
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>

              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
