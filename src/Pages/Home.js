import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { mobileData } from "../redux/action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      // const data = await fetch("http://localhost:5000/mobiledata").then(
      //   (data) => data.json()
      // );
      //here I have hosted my backend on cycli.sh are from there I got this url
      const data = await fetch(
        "https://kind-rose-rhinoceros-hose.cyclic.app/mobiledata"
      ).then((data) => data.json());
      // console.log("the data from the redux is:", data);

      data.map((item) =>
        dispatch(
          mobileData(
            item.mobilename,
            item.displaysize,
            item.displaytype,
            item.resolution,
            item.screentobodyratio,
            item.ppi,
            item.refreshrate,
            item.hdr,
            item.screenprotection,
            item.dustwaterresistance,
            item.brightness,
            item.os,
            item.chipset,
            item.processorcore,
            item.gpu,
            item.wideangle,
            item.ultrawide,
            item.depth,
            item.macro,
            item.telephoto,
            item.frontcamera,
            item.ramvariant1,
            item.ramvariant2,
            item.ramvariant3,
            item.ramvariant4,
            item.storagetype,
            item.memorycardoption,
            item.expandableoption,
            item.batterycapacity,
            item.batteryspeed,
            item.fingerprint,
            item.facelock,
            item.bluetooth,
            item.port,
            item.nfc,
            item.fiveg,
            item.stereo,
            item.jack,
            item.frontimage,
            item.backimage,
            item.leftimage,
            item.rightimage
          )
        )
      );
    }
    //implementing the debouncing and throttling start
    // function handleAPICalls(fn, d) {
    //   let timer;
    //   return function () {
    //     let context = this;
    //     //if this function will accept some arguments then the args variale will contain an array of arguments
    //     let args = arguments;
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       console.log("debouncing and throttiling");
    //       getData.apply(context, args);
    //     }, d);
    //   };
    // }
    //implementing the debouncing and throttling end
    getData();
    // handleAPICalls();
  });

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
