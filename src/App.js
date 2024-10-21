import { Route, Routes } from "react-router";
import BigCard from "./Components/Card/BigCard";
import BigCard2 from "./Components/Card/BigCard2";
import SmallCard from "./Components/Card/SmallCard";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NavBar2 from "./Components/NavBar2";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import MortgageCalculator from "./Pages/MortgageCalculator";
import Start from "./Pages/Start";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/mortgage" element={<MortgageCalculator />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  );
}

export default App;
