import Home from "./Pages/Home";
import Mobiles from "./Pages/Mobiles";
import Compare from "./Pages/Compare";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SelectedMobile from "./Pages/SelectedMobile";
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
        <Route path="/mobiles/*" element={<SelectedMobile />} />
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
