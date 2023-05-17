import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta tittle={"Shipping Policy"} />
      <BreadCrumb tittle="ShippingPolicy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingPolicy;
