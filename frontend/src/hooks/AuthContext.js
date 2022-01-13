import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const [authToken, setAuthToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user: [userData, setUserData],
        token: [authToken, setAuthToken],
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
