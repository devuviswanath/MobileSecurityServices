import React from "react";
import { Link } from "react-router-dom";
import Meta from "../componenets/Meta";
import Container from "../componenets/Container";
import CustomInput from "../componenets/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div className="error"></div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="error"></div>
                <div>
                  <Link to="/ForgotPassword">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/Signup" className="button signup">
                      SignUp
                    </Link>
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

export default Login;
