import Home from "./Pages/Home";
import Mobiles from "./Pages/Mobiles";
import Compare from "./Pages/Compare";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SelectedMobile from "./Pages/SelectedMobile";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/comparemobiles" element={<Compare />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mobiles/*" element={<SelectedMobile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
