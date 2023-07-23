import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getAService } from "../features/services/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
const SingleService = () => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state?.service?.singleservice);
  console.log("service state in operator", serviceState);
  const location = useLocation();
  const getServiceId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAService(getServiceId));
  }, []);

  return (
    <>
      <Meta title={"Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <img
                src={serviceState?.images[0]?.url}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-6 main-product-details">
            <div className="details">
              <div className="border-bottom">
                <h3 className="title" style={{ color: "black" }}>
                  {serviceState?.title}
                </h3>
              </div>
              <p className="product-data">{serviceState?.description}</p>
              <p className="price">
                Service Price Per-Month: $ {serviceState?.tem_price}....
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleService;
