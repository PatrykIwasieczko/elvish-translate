import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
