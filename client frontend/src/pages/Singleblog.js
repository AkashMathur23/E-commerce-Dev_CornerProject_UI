import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
const Singleblog = () => {
  return (
    <>
      <Meta tittle={"Dynamic Blog Name"} />
      <BreadCrumb tittle="Dynamic Blog Name" />

      <div className="blog-wrapper home0-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3  ">
              <h3 className="filter-tittle">Find by categories</h3>
              <div>
                <ul className="ps-0">
                  <li>watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiArrowSmLeft className="fs-4" /> Go Back To Blogs
              </Link>
              <h3 className="tittle">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="images/single-blog.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                placeat reprehenderit illo explicabo excepturi. Error laboriosam
                eos totam cupiditate commodi iusto velit sit voluptas fuga
                perferendis. Illo temporibus perferendis pariatur?Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Commodi,
                doloribus, sed nisi enim repellendus maxime amet omnis
                voluptatem placeat rerum natus sint aliquam atque officia ipsam
                magnam! Laborum, corrupti quisquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
