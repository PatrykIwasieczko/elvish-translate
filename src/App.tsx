import { Route, Routes } from "react-router-dom";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import Favourites from "./routes/Favourites";
import { Home } from "./routes/Home";

import { NavbarConnect } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarConnect />
      <div className="h-[512px]">
        <HeroBanner />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
