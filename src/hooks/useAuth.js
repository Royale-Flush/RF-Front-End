import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const { user, setUser, token, setToken, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  return {
    user,
    setUser,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  };
};

export default useAuth;
