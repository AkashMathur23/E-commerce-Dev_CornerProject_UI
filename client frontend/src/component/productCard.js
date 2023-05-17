import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import mainbanner from "../images/main-banner.jpeg";
import camera from "../images/camera.png";
import view from "../images/view.png";
import wishlist from "../images/wishlist.png";
// import watch2 from "../images/watch-1.avif";
// import addcart from "../images/add-cart.svg";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`col-3 ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img width={"20px"} src={wishlist} alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img width={"80%"} className="img-fluid" src={camera} alt="" />
            <img width={"80%"} className="img-fluid" src={view} alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones Bulk 10 Pack multi colored fo students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              officia reiciendis exercitationem nobis mollitia praesentium
              voluptates itaque earum cum repellat eveniet eum, fugit eaque
              delectus minima deserunt sed blanditiis hic?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img width={"20px"} src="images/compare.png" alt="compare" />
              </Link>
              <Link>
                <img width={"20px"} src="images/view.png" alt="view" />
              </Link>
              <Link>
                <img width={"20px"} src="images/add-cart.png" alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`col-3 ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img width={"20px"} src="images/wishlist.png" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img
              width={"80%"}
              className="img-fluid"
              src="images/camera.png"
              alt=""
            />
            <img
              width={"80%"}
              className="img-fluid"
              src="images/view.png"
              alt=""
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones Bulk 10 Pack multi colored fo students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              officia reiciendis exercitationem nobis mollitia praesentium
              voluptates itaque earum cum repellat eveniet eum, fugit eaque
              delectus minima deserunt sed blanditiis hic?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img width={"20px"} src="images/compare.png" alt="compare" />
              </Link>
              <Link>
                <img width={"20px"} src="images/view.png" alt="view" />
              </Link>
              <Link>
                <img width={"20px"} src="images/add-cart.png" alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
