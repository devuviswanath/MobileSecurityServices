import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getAService } from "../features/services/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getServiceOrderByUser } from "../features/user/userSlice";
const SingleService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state?.auth?.user?._id);
  const serviceState = useSelector((state) => state?.service?.singleservice);
  const location = useLocation();
  const getServiceId = location.pathname.split("/")[2];
  const userServiceOrderState = useSelector(
    (state) => state.auth.userserviceorder
  );
  useEffect(() => {
    dispatch(getAService(getServiceId));
  }, []);
  useEffect(() => {
    dispatch(getServiceOrderByUser(userId));
  }, []);
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  let isOrdered;
  userServiceOrderState?.map((item, key) => {
    if (
      item?.orderItems[0]?.service?._id == getServiceId &&
      new Date() < new Date(item?.expiredDate)
    ) {
      isOrdered = true;
    }
  });

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

              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    className="button border border-dark"
                    onClick={() => {
                      downloadFile(serviceState?.images[0]?.pdf);
                    }}
                  >
                    Download service info
                  </Link>
                  {isOrdered && (
                    <Link to={"/Orders"} className="button border border-dark">
                      Your Current Service Plan
                    </Link>
                  )}
                  {!isOrdered && userId && (
                    <Link
                      to={"/CheckoutService/" + serviceState?._id}
                      className="button border border-dark"
                    >
                      CheckOut Our Service
                    </Link>
                  )}
                  {!userId && (
                    <div>
                      <button
                        className="button border border-dark"
                        type="button"
                        onClick={() => {
                          navigate("/Login");
                        }}
                      >
                        CheckOut Our Service
                      </button>
                    </div>
                  )}
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
