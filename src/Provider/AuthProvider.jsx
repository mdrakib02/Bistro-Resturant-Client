import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Auth from "../Firebase/Firebase.config";
import AuthContext from "./Authcontext";

export default function AuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User", currentUser);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    user,
    loading,
    signIn,
    createUser,
  };
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
}
