import React, { createContext, useContext } from "react";
import useAuth from './../hooks/useAuth';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
