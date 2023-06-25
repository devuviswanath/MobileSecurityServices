import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Camera from "../images/security-cameras.jpg";

const SingleService = () => {
  return (
    <>
      <Meta title={"Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 ">
            <div className="main-product-image">
              <img src={Camera} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title" style={{ color: "black" }}>
                  Service Title
                </h3>
              </div>
              <p className="product-data">
                Free shipping and returns available on all orders! <br /> We
                ship all US domestic orders within
              </p>
              <div className=" py-3">
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Contract & Price :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <Link to="/CheckoutService/:id" className="button">
                    CheckOut Our Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleService;
