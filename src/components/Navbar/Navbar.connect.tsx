import { login, logout } from "../../store/actions";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Navbar } from "./Navbar";

export const NavbarConnect = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.isAuthenticated
  );

  return (
    <Navbar
      isAuthenticated={isAuthenticated}
      login={() => dispatch(login())}
      logout={() => dispatch(logout())}
    />
  );
};
