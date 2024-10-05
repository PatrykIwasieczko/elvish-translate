import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-100">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl">
              Elvish Translator
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/favourites" className="text-white">
                Favourites
              </Link>
              {isLoggedIn ? (
                <button
                  className="text-white"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-white"
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>
        <div className="h-[512px]">
          <HeroBanner />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
