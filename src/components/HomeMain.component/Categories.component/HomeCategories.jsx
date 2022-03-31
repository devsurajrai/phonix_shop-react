import racket from "../../../Assets/images/racquet.png";
import React from "react";
import "./home-categories.css";

const HomeCategories = () => {
  return (
    <div className="cat-card br-sm">
      <img className="res-img" src={racket} alt="" />
      <a className="button btn-sm cat-card-btn text-sm" href="">
        RACQUETS
      </a>
    </div>
  );
};

export default HomeCategories;
