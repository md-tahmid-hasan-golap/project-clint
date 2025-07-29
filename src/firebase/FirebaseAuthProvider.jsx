import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signIsWithGoggle
  const signIsWithGoggle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // lognOut
  const logout = () => {
    return signOut(auth);
  };

  useState(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    creatUser,
    signInUser,
    signIsWithGoggle,
    logout,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
