import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import BlogCard from "../component/blogCard";

const Blog = () => {
  return (
    <>
      <Meta tittle={"Blogs"} />
      <BreadCrumb tittle="Blogs" />
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
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
