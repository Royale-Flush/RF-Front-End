import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { getMe } from "../api";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [token]);

  useEffect(() => {
    const getMyUserFunction = async () => {
      if (token) {
        const result = await getMe(token);
        setUser({
          id: result.id,
          username: result.username,
        });
      }
    };
    getMyUserFunction();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
