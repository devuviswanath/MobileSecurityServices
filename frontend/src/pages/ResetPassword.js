import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPasswordSchema = yup.object({
  password: yup.string().required("Password is Required"),
  confpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confpassword: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
    },
  });
  return (
    <>
      <Meta title={"Reset Password"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange("confpassword")}
                  onBlur={formik.handleBlur("confpassword")}
                  value={formik.values.confpassword}
                />
                <div className="error">
                  {formik.touched.confpassword && formik.errors.confpassword}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">OK</button>
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

export default ResetPassword;
