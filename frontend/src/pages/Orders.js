import React, { useEffect } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderByUser,
  getServiceOrderByUser,
} from "../features/user/userSlice";
const Orders = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.auth?.user?._id);
  const userOrderState = useSelector((state) => state?.auth?.userorder);
  const userServiceOrderState = useSelector(
    (state) => state?.auth?.userserviceorder
  );

  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, []);
  useEffect(() => {
    dispatch(getServiceOrderByUser(userId));
  }, []);

  return (
    <>
      <Meta title={"Orders"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header justify-content-between py-3 d-flex align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-3">Count</h4>
              <h4 className="cart-col-4">Amount</h4>
              <h4 className="cart-col-5">Date</h4>
            </div>
            {userOrderState &&
              userOrderState?.map((item, key) => {
                return (
                  <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item?.orderItems[0]?.product?.images[0]?.url}
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.orderItems[0]?.product?.title}</p>
                      </div>
                    </div>

                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <h5 className="price">{item?.orderItems[0]?.quantity}</h5>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">{item?.orderItems[0]?.price}</h5>
                    </div>
                    <div className="cart-col-5">
                      <h5 className="price">
                        {new Date(item?.createdAt).toLocaleString()}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cart-header justify-content-between py-3 d-flex align-items-center">
              <h4 className="cart-col-1">Service Name</h4>
              <h4 className="cart-col-3">Contract Type</h4>
              <h4 className="cart-col-3">Amount</h4>
              <h4 className="cart-col-4">Start Date</h4>
              <h4 className="cart-col-4">End Date</h4>
              <h4 className="cart-col-4">Status</h4>
            </div>
            {userServiceOrderState &&
              userServiceOrderState?.map((item, key) => {
                return (
                  <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-75">
                        <p>{item?.orderItems[0]?.service?.title}</p>
                      </div>
                    </div>

                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <h5 className="price">
                        {item?.billingInfo?.contract_type}
                      </h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <h5 className="price">{item?.totalPrice}</h5>
                    </div>

                    <div className="cart-col-4">
                      <h5 className="price">
                        {new Date(item?.paidAt).toLocaleString().split(",")[0]}
                      </h5>
                    </div>
                    {item?.billingInfo?.contract_type == "temporary" && (
                      <div className="cart-col-4">
                        <h5 className="price">
                          {
                            new Date(item?.expiredDate)
                              .toLocaleString()
                              .split("T")[0]
                              .split(",")[0]
                          }
                        </h5>
                      </div>
                    )}
                    {item?.billingInfo?.contract_type == "permanent" && (
                      <div className="cart-col-4">
                        <h5 className="price">
                          {
                            new Date(item?.expiredDate)
                              .toLocaleString()
                              .split("T")[0]
                              .split(",")[0]
                          }
                        </h5>
                      </div>
                    )}
                    {new Date() < new Date(item?.expiredDate) && (
                      <div className="cart-col-4">
                        <h5 className="price">Current Service Plan</h5>
                      </div>
                    )}

                    {new Date() > new Date(item?.expiredDate) && (
                      <div className="cart-col-4">
                        <h5 className="price">Expired</h5>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
