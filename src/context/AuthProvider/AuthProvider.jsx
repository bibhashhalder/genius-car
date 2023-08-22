import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../routes/Routes/firebase.config";

const authContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const authInfo = {};
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
