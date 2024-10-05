import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { isAuthenticated, login, logout } from "./utils/auth";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState({ english: "", elvish: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const handleTranslate = (text: string) => {
    setTranslation({ english: text, elvish: "translation" });
  };

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
                    logout();
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-white"
                  onClick={() => {
                    login(crypto.randomUUID());
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

        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto p-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="border border-gray-300 p-2 w-full rounded-lg"
                      placeholder="Enter text to translate..."
                    />
                    <button
                      onClick={() => handleTranslate(text)}
                      className="text-white h-full"
                    >
                      Translate
                    </button>
                  </div>

                  {translation.elvish && (
                    <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
                      <h2 className="text-xl">Translation:</h2>
                      <p>English: {translation.english}</p>
                      <p>Elvish: {translation.elvish}</p>
                      {isLoggedIn && (
                        <>
                          <button
                            onClick={() => console.log("add favourite")}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
                          >
                            Add to Favourites
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            }
          />

          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <div className="container mx-auto p-6">
                  <h1 className="text-2xl mb-4">Favourite Translations</h1>
                  <div>Todo</div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
