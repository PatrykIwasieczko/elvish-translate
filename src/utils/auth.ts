import Cookies from "js-cookie";

export const login = (token: string) => {
  Cookies.set("user", token, { expires: 1 });
};

export const logout = () => {
  Cookies.remove("user");
};

export const isAuthenticated = () => {
  return !!Cookies.get("user");
};
