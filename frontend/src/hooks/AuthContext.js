import { useState, createContext, useContext } from "react";
import { emptyUserObject } from "../services/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState(emptyUserObject);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
};
