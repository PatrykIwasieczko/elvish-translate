import { Link } from "react-router-dom";
import { NavbarProps } from "./Navbar.interface";

export const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  login,
  logout,
}) => (
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
          <button className="text-white" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="text-white" onClick={login}>
            Login
          </button>
        )}
      </div>
    </div>
  </nav>
);
