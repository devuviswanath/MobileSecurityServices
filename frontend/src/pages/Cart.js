import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import {
  getUserCart,
  deleteCartProduct,
  updateCartProduct,
} from "../features/user/userSlice";
import emptyCart from "../images/emptyCart.jpg";
const Cart = () => {
  const getTokenfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  const config2 = {
    headers: {
      authorization: `Bearer ${
        getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  // *******************************
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);
  // ****************************
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct({ id: id, config2: config2 }));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  // ************************************
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);
  return (
    <>
      <Meta title={"Cart"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        {userCartState.length == 0 && (
          <img src={emptyCart} alt="" class="rounded mx-auto d-block" />
        )}
        {userCartState.length > 0 && (
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            src={item?.productId?.images[0]?.url}
                            className="img-fluid"
                            alt="product"
                          />
                        </div>
                        <div className="w-75">
                          <p>{item?.productId.title}</p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">$ {item?.productId.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            className="form-control"
                            type="number"
                            name={"quantity" + item?._id}
                            min={1}
                            max={10}
                            id={"cart" + item?._id}
                            value={item?.quantity}
                            onChange={(e) => {
                              setProductUpdateDetail({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          $ {item?.productId.price * item?.quantity}
                        </h5>
                      </div>
                      <div>
                        <AiFillDelete
                          className="text-danger "
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </Container>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        {userCartState.length > 0 && (
          <div className="row">
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/" className="button border border-dark">
                  Continue To Shopping
                </Link>
                {(totalAmount !== null || totalAmount !== 0) && (
                  <div className="d-flex flex-column align-items-end">
                    <h4>SubTotal: $ {totalAmount}</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/CheckoutProducts" className="button">
                      Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
