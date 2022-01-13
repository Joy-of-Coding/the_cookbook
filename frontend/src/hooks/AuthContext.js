import { useState, createContext, useContext } from "react";
import { emptyUserObject } from "../services/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState(emptyUserObject);
  const [authToken, setAuthToken] = useState("");

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, authToken, setAuthToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
