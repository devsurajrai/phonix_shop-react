import React from "react";
import HomeCategories from "./Categories.component/HomeCategories";
import Hero from "./Hero.component/Hero";
import HomeTrendingCard from "./HomeTrendingCard.component/HomeTrendingCard";
import "./home-main.css";
const HomeMain = () => {
  return (
    <main className="home-main">
      <section className="categories">
        <HomeCategories />
        <HomeCategories />
        <HomeCategories />
        <HomeCategories />
        <HomeCategories />
      </section>
      <section className="hero br-sm">
        <Hero />
      </section>
      <section className="latest-items-section">
        <HomeTrendingCard />
        <HomeTrendingCard />
      </section>
    </main>
  );
};

export default HomeMain;
