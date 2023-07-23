import React from "react";
import { Link, useLocation } from "react-router-dom";
const ServiceCard = (dataFromHome) => {
  const { data } = dataFromHome;
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
            className={` ${location.pathname == "/" ? "col-3" : "col-3"} `}
          >
            <div className="card" style={{ width: "18rem" }}>
              <Link to={"/SingleService/" + item?._id}>
                <img
                  src={item?.images[0]?.url}
                  className="card-img-top"
                  alt="services"
                />
              </Link>

              <div className="card-body">
                <h3 className="card-text">{item.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;
