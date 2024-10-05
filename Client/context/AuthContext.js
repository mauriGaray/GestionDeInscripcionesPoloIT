import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
