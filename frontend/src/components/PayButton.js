import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { base_url } from "../utils/axiosConfig";

const PayButton = ({ userCartState }) => {
  const user = useSelector((state) => state.auth);

  const handleCheckout = () => {
    axios
      .post(`${base_url}stripe/create-checkout-session`, {
        userCartState,
        userId: user.user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button
        className="button border border-dark"
        onClick={() => handleCheckout()}
      >
        Check Out
      </button>
    </>
  );
};

export default PayButton;
