import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import gr4 from "../images/gr4.svg";
import gr3 from "../images/gr3.svg";
import gr2 from "../images/gr2.svg";
import gr from "../images/gr.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
const OurStore = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log("productState", productState);
  const [grid, setGrid] = useState(12);
  return (
    <>
      <Meta title={"Our Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{`${productState.length} products`}</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr4}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr3}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
