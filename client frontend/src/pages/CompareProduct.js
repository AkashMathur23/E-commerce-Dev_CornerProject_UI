import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import Color from "../component/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta tittle={"Compare Products"} />
      <BreadCrumb tittle="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image w-100">
                  <img className="w-100" src="images/phone.jpg" alt="phone" />
                </div>
                <div className="compare-product-details">
                  <h5 className="tittle">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watches</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image w-100">
                  <img className="w-100" src="images/phone.jpg" alt="phone" />
                </div>
                <div className="compare-product-details">
                  <h5 className="tittle">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watches</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
