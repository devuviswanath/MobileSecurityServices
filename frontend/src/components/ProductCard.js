import React from "react";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  let newdata;
  if (data) {
    newdata = Object.values(data);
  } else {
    newdata = data;
  }
  return (
    <>
      {newdata?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/OurStore" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative">
              <div className="product-image">
                <Link
                  to={"/SingleProduct/" + item?._id}
                  className="border-0 bg-transparent"
                >
                  <img
                    src={item?.images[0]?.url}
                    className="img-fluid  mx-auto"
                    alt="product"
                  />
                </Link>
              </div>

              <div className="product-details">
                <h5 className="product-title">{item?.title}</h5>
                <p
                  className={`description ${grid == 12 ? "d-block" : "d-none"}`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">$ {item?.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
