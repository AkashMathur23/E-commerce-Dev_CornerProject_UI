import React from "react";
import { Link } from "react-router-dom";

const blogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img className="img-fluid w-50" src="images/camera.png" alt="Img" />
      </div>
      <div className="blog-content">
        <p className="date">4 May, 2023 </p>
        <h5 className="tittle">A Beautiful Sunday Morning</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          perferendis libero laudantium neque dicta ex officia aspernatur,
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default blogCard;
