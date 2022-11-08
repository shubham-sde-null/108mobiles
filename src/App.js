// import Navbar from "./Components/Navbar";
// import SubCategories from "./Components/SubCategories";
// import CategoryTypes from "./Components/CategoryTypes";
// import Recommended from "./Components/Recommended";
// import { recommendedItems } from "./Contexts/Categories";
// import { latestAndPopular } from "./Contexts/Categories";
// import UpcomigMobiles from "./Components/upcomingMobiles/UpcomingMobiles";
// import NewsSection from "./Components/NewsSection/NewsSection";
// import { latestReviews } from "./Contexts/Categories";
// import { latestNews } from "./Contexts/Categories";
// import MobileBrands from "./Components/MobileBrands";
// import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Mobiles from "./Pages/Mobiles";
import Compare from "./Pages/Compare";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/comparemobiles" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar />
    //   <SubCategories />
    //   <CategoryTypes />
    //   <Recommended
    //     mobileData={recommendedItems}
    //     title="Recently Viewed and Recommended"
    //   />
    //   <Recommended
    //     mobileData={latestAndPopular}
    //     title="Latest and Popular Smartphones"
    //   />
    //   <NewsSection data={latestNews} />
    //   <UpcomigMobiles />
    //   <NewsSection data={latestReviews} />
    //   <MobileBrands />
    //   <Footer />
    // </div>
  );
}

export default App;
