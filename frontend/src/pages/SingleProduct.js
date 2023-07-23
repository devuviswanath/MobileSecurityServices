import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAProduct } from "../features/products/productSlice";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
const SingleProduct = () => {
  const { user } = useSelector(({ auth }) => auth);
  const getTokenfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  const config1 = {
    headers: {
      authorization: `Bearer ${
        getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const getProductId = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [alreadyAddedProduct, setAlreadyAddedProduct] = useState(false);
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart(config1));
  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId == cartState[index]?.productId?._id) {
        setAlreadyAddedProduct(true);
      }
    }
  }, []);
  const uploadCart = (productState) => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
        config1: config1,
      })
    );
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
                <img
                  src={productState?.images[0]?.url}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="main-product-details"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>

              <div className=" py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex gap-10 align-items-center my-2">
                  <p className="product-data">In Stock</p>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAddedProduct == false && (
                    <>
                      <h6 className="product-heading">Quantity :</h6>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="d-flex gap-10 flex-column  my-3">
                  <p className="product-data">{productState?.description}</p>
                </div>
                {user?._id && (
                  <div
                    className={
                      alreadyAddedProduct
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border border-dark"
                      type="button"
                      onClick={() => {
                        alreadyAddedProduct
                          ? navigate("/Cart")
                          : uploadCart(productState);
                      }}
                    >
                      {alreadyAddedProduct == true
                        ? "Go To Cart"
                        : "Add To Cart"}
                    </button>
                  </div>
                )}
                {!user?._id && (
                  <div
                    className={
                      alreadyAddedProduct
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border border-dark"
                      type="button"
                      onClick={() => {
                        navigate("/Login");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
