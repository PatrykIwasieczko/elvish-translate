import { Navigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../store/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.isAuthenticated
  );

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
