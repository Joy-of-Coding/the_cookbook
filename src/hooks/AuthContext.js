import { useState, createContext, useContext } from "react";
import * as authService from "../services/Auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(authService.emptyUserObject);

  let signIn = (userCredentials, callback) => {
    return authService.signIn(userCredentials, setUserData, callback);
  };

  let register = (userCredentials, callback) => {
    return authService.register(userCredentials, setUserData, callback);
  };

  let signOut = (callback) => {
    return authService.signOut(setUserData, callback);
  };

  let value = { userData, setUserData, signIn, signOut, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
