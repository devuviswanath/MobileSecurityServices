import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBanner from "../images/HomeBanner.jpg";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { getAllServices } from "../features/services/servicesSlice";

function Home() {
  const serviceState = useSelector((state) => state?.service?.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  return (
    <>
      <Meta title={"Home"} />
      <Container class1="home-wrapper-1  py-2">
        <div className="row">
          <div className="col-12">
            <img src={HomeBanner} alt="banner" style={{ width: "100%" }} />
          </div>
        </div>
      </Container>
      <Container class1="service-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Services</h3>
          </div>
          <ServiceCard data={serviceState ? serviceState : []} />
        </div>
      </Container>
    </>
  );
}

export default Home;
