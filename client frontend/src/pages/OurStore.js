import React, { useState } from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../component/productCard";
import Color from "../component/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta tittle={"Our Store"} />
      <BreadCrumb tittle="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3  ">
                <h3 className="filter-tittle">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Filter By</h3>
                <div>
                  <h5 className="sub-tittle">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="/"
                      />
                      <label className="form-check-label" htmlFor="">
                        Out Of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-tittle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        style={{ height: "35px" }}
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlfor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        style={{ height: "35px" }}
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlfor="floatingInput">From</label>
                    </div>
                  </div>
                  <h5 className="sub-tittle">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-tittle">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-tittle ">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Random Products</h3>
                <div>
                  <div className="rondom-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/camera.png"
                        className="img-fluid"
                        alt="wtach"
                      />
                    </div>
                    <div className="w-100">
                      <h5>kids Headphones bulk to kjfhguhdf </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300.00</b>
                    </div>
                  </div>
                  <div className="rondom-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/camera.png"
                        className="img-fluid"
                        alt="wtach"
                      />
                    </div>
                    <div className="w-100">
                      <h5>kids Headphones bulk to kjfhguhdf </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By
                    </p>
                    <select className="form-control-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>

                      <option value="tittle-ascending">
                        Alphabetically, A-Z
                      </option>

                      <option value="tittle-descending">
                        Alphabetically, Z-A
                      </option>

                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low{" "}
                      </option>
                      <option value="created-ascending">
                        Date, Old to New
                      </option>
                      <option value="created-descending">
                        Date, New to Old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/main-banner.jpeg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/main-banner.jpeg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/main-banner.jpeg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/main-banner.jpeg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
