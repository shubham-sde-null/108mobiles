import React from "react";
import Navbar from "../Components/Navbar";
import PopularFeatures from "./../Components/PopularFeatures";
import Recommended from "../Components/Recommended";
import { latestAndPopular } from "./../Contexts/Categories";
import UpcomigMobiles from "../Components/upcomingMobiles/UpcomingMobiles";
import MobileBrands from "../Components/MobileBrands";
import Footer from "../Components/Footer";
import FindPhone from "../Components/FindPhone";
import { findPhoneContentList } from "./../Contexts/Categories";
function Mobiles() {
  return (
    <React.Fragment>
      <Navbar />
      <PopularFeatures />
      <FindPhone data={findPhoneContentList} />
      <MobileBrands />
      <Recommended
        mobileData={latestAndPopular}
        title="Latest and Popular Smartphones"
      />
      <UpcomigMobiles />
      <Footer />
    </React.Fragment>
  );
}

export default Mobiles;
