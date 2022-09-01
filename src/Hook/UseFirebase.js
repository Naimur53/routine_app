import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import firebaseAuth from "../Firebase/Firebase.init";
firebaseAuth();
const UseFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  return {
    signInWithGoogle,
  };
};

export default UseFirebase;
