import React, { useState } from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import ProductCard from "../component/productCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../component/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = {
    zoomWidth: 500,
    img: "https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta tittle={"Product Name"} />
      <BreadCrumb tittle="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width={"100px"}
                    src="https://m.media-amazon.com/images/I/71j48-KoBMS._UL1500_.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom py-3">
                  <h3 className="tittle">
                    kids headphones bulk 10pack multi colored for students
                  </h3>
                  <div className="border-bottom">
                    <p>$ 100</p>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <a className="review-btn" href="#review">
                      write a review
                    </a>
                  </div>
                </div>
                <div className="border-bottom PY-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 mt-2 mb-3 ">
                    <h3 className="product-heading">Size :</h3>
                    <div className="dflex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border-secondary ">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3 ">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        min={1}
                        max={10}
                        id=""
                        className="form-control"
                        type="number"
                        name=""
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button type="submit" className="button border-0">
                        Add To Cart
                      </button>
                      <button className="button signup">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <TbGitCompare className="fs-5 me-2" />{" "}
                      <a href="">Add To Compare</a>
                    </div>
                    <div>
                      <AiOutlineHeart className="fs-5 me-2" />{" "}
                      <a href="">Add To Wishlist</a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free Shipping and returns available on all orders! <br />
                      we ship all US domestic orders within{" "}
                      <b>5-10 bisiness days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">pRODUCT lINK :</h3>

                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  dignissimos repudiandae asperiores quidem, unde iure quod cum
                  cupiditate? Aliquam numquam quam cupiditate delectus ad
                  recusandae praesentium sed, fugit deleniti totam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="reviews-wrapper  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customers Reviews</h4>
                    <div className="d-flex gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 t-review">( 2 reviews)</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-dark decoration-underline" href="">
                        Write a Reviews
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4> Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6>Akash</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero aliquid consequatur dolore asperiores repellat
                      quibusdam nesciunt deleniti magni eligendi. Maiores non
                      hic, autem optio rem tenetur maxime dolorum corrupti
                      culpa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper py-5 home-wrapper-2"></section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
