import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useState(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);



  const authData = {
    user, loading,
    registerWithEmailPass: (email, password) =>
      createUserWithEmailAndPassword(auth, email, password),
    signInWithEmailPass: (email, password) =>
      signInWithEmailAndPassword(auth, email, password),
    logoutUser: () => signOut(auth),
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
