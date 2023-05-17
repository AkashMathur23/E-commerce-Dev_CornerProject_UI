import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta tittle={"Wishlist"} />
      <BreadCrumb tittle="Wishlist" />

      <div className="whishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image w-100">
                  <img className="w-100" src="images/phone.jpg" alt="phone" />
                </div>
                <div className="px-3 py-3">
                  <h5 className="tittle">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="whishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image w-100">
                  <img className="w-100" src="images/phone.jpg" alt="phone" />
                </div>
                <div className="px-3 py-3">
                  <h5 className="tittle">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="whishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image w-100">
                  <img className="w-100" src="images/phone.jpg" alt="phone" />
                </div>
                <div className="px-3 py-3">
                  <h5 className="tittle">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
