import React from "react";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ContractPolicy = () => {
  return (
    <>
      <Meta title={"Contract Page"} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div class="contract-text">
                <h1>Explore the right plan for you</h1>
              </div>
            </div>
            <div className="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Temporary Contract</h4>
                    <p class="card-text">
                      Temporary contract have a fixed duration. This plan
                      continues indefinitely until you decide to cancel it. It
                      does , not have a fixed end date,you have the flexibility
                      to cancel the contract whenever you want.
                    </p>
                    <h6>pay-per-day</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Permanent Contract</h4>
                    <p class="card-text">
                      Permanent Contract are ongoing until terminared by
                      customer. once the contract expire, the plan ends
                      automatically, and you may need to renew or extend it if
                      you wish to continue.
                    </p>
                    <h6> pay-per-month OR pay-per-year</h6>
                  </div>
                </div>
              </div>
            </div>
            <Container class1="contact-wrapper py-5 home-wrapper-2">
              <div className="col-12">
                <div class="contract-text">
                  <h1>Compare Plan</h1>
                </div>
                <div className="">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th style={{ width: "34%" }}></th>
                        <th style={{ width: "34%" }}>Multi-currency support</th>
                        <th style={{ width: "34%" }}>24/7 Live chat support</th>
                        <th style={{ width: "34%" }}>Product Replcement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Temporary Contract</th>
                        <td></td>
                        <td></td>
                        <td>&#10003;</td>
                      </tr>
                      <tr>
                        <th>Permanent ContractPublic</th>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContractPolicy;
