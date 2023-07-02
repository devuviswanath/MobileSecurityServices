import React, { useEffect } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const signupSchema = yup.object({
  fullname: yup.string().required("FullName is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email address is required"),
  number: yup.string().required("Mobile number is Required"),
  password: yup.string().required("Password is Required"),
});
const Signup = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      number: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  useEffect(() => {
    if (authState.createdUser !== null && authState.isError === false) {
      navigate("/Login");
    }
  }, [authState]);
  return (
    <>
      <Meta title={"Sign Up"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formik.values.fname}
                  onChange={formik.handleChange("fullname")}
                  onBlur={formik.handleBlur("fullname")}
                />
                <div className="error">
                  {formik.touched.fullname && formik.errors.fullname}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="number"
                  placeholder="Mobile Number"
                  value={formik.values.number}
                  onChange={formik.handleChange("number")}
                  onBlur={formik.handleBlur("number")}
                />
                <div className="error">
                  {" "}
                  {formik.touched.number && formik.errors.number}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
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

export default Signup;
