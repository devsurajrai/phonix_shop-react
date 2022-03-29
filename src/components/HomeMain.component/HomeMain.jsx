import React from "react";
import HomeCategories from "./Categories.component/HomeCategories";
import Hero from "./Hero.component/Hero";
import HomeTrendingCard from "./HomeTrendingCard.component/HomeTrendingCard";
import "./home-main.css";
import { useFetchedData } from "../../customHooks/useFetchedData";
const HomeMain = () => {
  const { backendCategoryData } = useFetchedData();
  const categoryData =
    backendCategoryData && backendCategoryData.data.categories;

  return (
    <main className="home-main">
      <section className="categories">
        {backendCategoryData &&
          categoryData.map((category) => (
            <HomeCategories key={category.id} category={category} />
          ))}
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
