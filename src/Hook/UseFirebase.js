
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, getIdToken } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import firebaseAuth from "../Firebase/Firebase.init";
import axios from 'axios';
import { allData, setLoading, setUser } from '../ManageState/DataSlice/dataSlice';

firebaseAuth();
const UseFirebase = () => {
  // const [user, setUser] = useState({}); 
  const [authError, setAuthError] = useState('');
  const [token, setToken] = useState('');
  const { loading, user } = useSelector(allData)
  const dispatch = useDispatch();
  const auth = getAuth();

  // utilities 
  const saveUser = data => {
    axios.post('https://enigmatic-headland-64217.herokuapp.com/user', data)
  }


  // provider 
  const googleProvider = new GoogleAuthProvider();
  // methods
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //email and pass register
  const handleRegister = (email, password, name, history) => {
    dispatch(setLoading(true))
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name, photoURL: 'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png' };
        // saveUser(newUser);
        // setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: 'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png'

        }).then().catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => dispatch(setLoading(false)))
  }
  // login in user
  const loginUser = (email, password, location, history) => {
    dispatch(setLoading(true))
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const url = location?.state?.from || '/';
        history.replace(url);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => dispatch(setLoading(false)))
  }

  // observing state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))
        getIdToken(user)
          .then(idToken => setToken(idToken))
      } else {
        dispatch(setUser(user))
      }

      dispatch(setLoading(true))
    });

  }, [auth, dispatch])
  return {
    signInWithGoogle,
    handleRegister,
    loginUser,
  };
};

export default UseFirebase;
