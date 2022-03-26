import React from "react";
import { Link } from "react-router-dom";
import "./home-categories.css";

const HomeCategories = ({ category }) => {
  return (
    <div className="cat-card br-sm">
      <img className="res-img" src={category.categoryImgUrl} alt="" />
      <Link
        to={{
          pathname: "/products",
          search: `?category=${category.categoryName}`,
        }}
        className="button btn-sm cat-card-btn text-sm"
      >
        {category.categoryName.toUpperCase()}
      </Link>
    </div>
  );
};

export default HomeCategories;
