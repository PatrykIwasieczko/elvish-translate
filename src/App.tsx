import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import Favourites from "./routes/Favourites";
import { Home } from "./routes/Home";
import { RootState, useAppDispatch, useAppSelector } from "./store/store";
import { login, logout } from "./store/actions";

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.isAuthenticated
  );

  return (
    <BrowserRouter>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl">
              Elvish Translator
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/favourites" className="text-white">
                Favourites
              </Link>
              {isAuthenticated ? (
                <button
                  className="text-white"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-white"
                  onClick={() => dispatch(login())}
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

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
