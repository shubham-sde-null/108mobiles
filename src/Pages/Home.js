import React from "react";
import Navbar from "../Components/Navbar";
import SubCategories from "../Components/SubCategories";
import CategoryTypes from "../Components/CategoryTypes";
import Recommended from "../Components/Recommended";
import { recommendedItems } from "../Contexts/Categories";
import { latestAndPopular } from "../Contexts/Categories";
import UpcomigMobiles from "../Components/upcomingMobiles/UpcomingMobiles";
import NewsSection from "../Components/NewsSection/NewsSection";
import { latestReviews } from "../Contexts/Categories";
import { latestNews } from "../Contexts/Categories";
import MobileBrands from "../Components/MobileBrands";
import Footer from "../Components/Footer";
function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <SubCategories />
      <CategoryTypes />
      <Recommended
        mobileData={recommendedItems}
        title="Recently Viewed and Recommended"
      />
      <Recommended
        mobileData={latestAndPopular}
        title="Latest and Popular Smartphones"
      />
      <NewsSection data={latestNews} />
      <UpcomigMobiles />
      <NewsSection data={latestReviews} />
      <MobileBrands />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
