import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
  getIdToken,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import firebaseAuth from "../Firebase/Firebase.init";
import axios from "axios";
import {
  allData,
  getUserFromDB,
  setLoading,
  setUser,
} from "../ManageState/DataSlice/dataSlice";

firebaseAuth();
const useFirebase = ({ observer }) => {
  // const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const { loading, user } = useSelector(allData);
  const [dataSaveFail, setDataSaveFail] = useState(0);
  const dispatch = useDispatch();
  const auth = getAuth();

  // utilities
  const saveUser = ({
    displayName,
    email,
    photoURL,
    createdAt,
    uid,
    method,
  }) => {
    return axios[method]("http://localhost:5001/user", {
      displayName,
      email,
      photoURL,
      createdAt,
      uid,
    });
  };

  // handle error if user filed to save data
  useEffect(() => {
    if (dataSaveFail) {
      saveUser({ ...user, method: "put" })
        .then((res) => {
          setDataSaveFail(0);
        })
        .catch((error) => {
          if (dataSaveFail <= 3) {
            setDataSaveFail(dataSaveFail + 1);
          } else {
            alert("cant able to save user info");
          }
        });
    }
  }, [dataSaveFail]);

  // provider
  const googleProvider = new GoogleAuthProvider();

  // logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUser({ set: true }));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // methods
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //email and pass register
  const handleRegister = ({ email, password, name, location, navigate }) => {
    dispatch(setLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const userInfo = {
          displayName: name,
          email: userCredential.user.email,
          photoURL: "https://i.ibb.co/1drKb3X/user.png",
          createdAt: userCredential.user.createdAt,
          uid: userCredential.user.uid,
        };
        dispatch(setUser(userInfo));
        const url = location?.state?.from || "/";
        navigate(url);
        // handle saving
        saveUser({ ...userInfo, method: "post" })
          .then((res) => {
            dispatch(setUser(res.data));
            dispatch(setLoading(false));
          })
          .catch((error) => {
            setDataSaveFail(dataSaveFail + 1);
          });

        // setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://i.ibb.co/1drKb3X/user.png",
        })
          .then((res) => {})
          .catch((error) => {});
      })
      .catch((error) => {
        dispatch(setLoading(false));
        setAuthError(error.message);
      })
      .finally();
  };
  // login in user
  const loginUser = ({ email, password, location, navigate }) => {
    // dispatch(setLoading(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const url = location?.state?.from || "/";
        navigate(url);

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  useEffect(() => {
    if (observer) {
      dispatch(setLoading(true));
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, email, photoURL, createdAt, uid } = user;
          dispatch(
            getUserFromDB({
              displayName,
              email,
              photoURL,
              createdAt,
              uid,
            })
          );

          // getIdToken(user)
          //   .then(idToken =>)
        } else {
          dispatch(setLoading(false));
          dispatch(setUser({ set: true }));
        }
      });
    }
  }, [auth, dispatch]);

  return {
    signInWithGoogle,
    handleRegister,
    loginUser,
    logOut,
    authError,
    auth,
  };
};

export default useFirebase;
