// import React from "react";

// const Logout = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };

// export default Logout;

import React from "react";
import { useAuth } from "../hooks/useAuth";

const Logout = ({ setIsLoggedIn, isLoggedIn }) => {
  const { token, setToken } = useAuth;
  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(localStorage.removeitem("token"));
  };

  return (
    <form
      onSubmit={() => {
        logoutUser();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
