import React from "react";
import { Link, useLocation } from "react-router-dom";
import Camera from "../images/security-cameras.jpg";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        key=""
        className={` ${
          location.pathname == "/OurStore" ? `gr-${grid}` : "col-3"
        } `}
      >
        <div className="product-card position-relative">
          <div className="product-image">
            <Link to={"/SingleProduct"} className="border-0 bg-transparent">
              <img
                src={Camera}
                className="img-fluid  mx-auto"
                alt="product image"
              />
            </Link>
          </div>

          <div className="product-details">
            <h6 className="brand">Brand</h6>
            <h5 className="product-title">Title</h5>
            <p
              className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              dangerouslySetInnerHTML={{ __html: "description" }}
            ></p>
            <p className="price">$ 500</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
