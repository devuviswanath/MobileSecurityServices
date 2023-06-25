import React, { useState } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import Camera from "../images/security-cameras.jpg";
const SingleProduct = () => {
  const navigate = useNavigate();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const uploadCart = () => {
    console.log("------upload cart---");
    navigate("/Cart");
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div
              className="main-product-image"
              style={{ width: "100%", height: "100%" }}
            >
              <div>
                <img src={Camera} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="main-product-details"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="border-bottom">
                <h3 className="title">title</h3>
              </div>

              <div className=" py-3">
                <p className="price">$ 500</p>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded == false && (
                    <>
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                          onChange=""
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border-0"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/Cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded == true ? "Go To Cart" : "Add To Cart"}
                    </button>
                  </div>
                </div>

                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
