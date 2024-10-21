import { Route, Routes } from "react-router";
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
