import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import AuthContext from "./Authcontext";
import Auth from "../Firebase/Firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
const googleProvider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(Auth);
  };

  const handleupdateProfile = (name, photo) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic
          .post("/jwt", userInfo)
          .then((res) => {
            console.log(res.data.token);
            if (res.data.token) {
              localStorage.setItem("access_token", res.data.token); // Use an underscore instead of a space
            }
          })
          .catch((error) => {
            console.error("Error fetching token:", error.message);
            localStorage.removeItem("access_token"); // Ensure cleanup on error
          });
      } else {
        localStorage.removeItem("access_token");
      }
      setLoading(false);
    });
    return () => unsubscribe(); // Clean up
  }, []);

  const authInfo = {
    user,
    loading,
    signIn,
    createUser,
    logOut,
    handleupdateProfile,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
