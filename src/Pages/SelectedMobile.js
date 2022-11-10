import React from "react";
import Navbar from "../Components/Navbar";
import SelectedMobilePage from "../Components/selectedProduct/SelectedMobilePage";
import Footer from "../Components/Footer";
function SelectedMobile() {
  return (
    <React.Fragment>
      <Navbar />
      <SelectedMobilePage />
      <Footer />
    </React.Fragment>
  );
}

export default SelectedMobile;
