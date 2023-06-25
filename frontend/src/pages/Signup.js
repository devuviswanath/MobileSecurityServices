import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" onSubmit="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                />
                <div className="error"></div>
                <div className="error"></div>
                <CustomInput type="email" name="email" placeholder="Email" />
                <div className="error"></div>
                <CustomInput
                  type="tel"
                  name="number"
                  placeholder="Mobile Number"
                />
                <div className="error"></div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="error"></div>
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
