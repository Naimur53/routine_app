
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, getIdToken } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import firebaseAuth from "../Firebase/Firebase.init";
import axios from 'axios';
import { allData, setLoading, setUser } from '../ManageState/DataSlice/dataSlice';

firebaseAuth();
const useFirebase = () => {
  // const [user, setUser] = useState({}); 
  const [authError, setAuthError] = useState('');
  const [token, setToken] = useState('');
  const { loading, user } = useSelector(allData)
  const dispatch = useDispatch();
  const auth = getAuth();

  // utilities 
  const saveUser = ({ displayName,
    email,
    photoURL,
    createdAt, uid }) => {

    return axios.put('http://localhost:5001/user', {
      displayName,
      email,
      photoURL,
      createdAt, uid
    })
  }


  // provider 
  const googleProvider = new GoogleAuthProvider();

  // logout
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser({}));
    }).catch((error) => {
      // An error happened.
    });
  }
  // methods
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //email and pass register
  const handleRegister = ({ email, password, name, history }) => {
    console.log({ email, password, name, history });
    dispatch(setLoading(true))
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        // handle saving
        saveUser({ ...userCredential, displayName: name, photoURL: 'https://i.ibb.co/1drKb3X/user.png' }).then(res => {
          dispatch(setLoading(false))
        })
          .catch(error => {
            logOut();
            console.log(error)
            alert('error while saving user info', error.message)
          })

        // setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: 'https://i.ibb.co/1drKb3X/user.png'

        }).then(res => {
          console.log('update data', res)
        }).catch((error) => {

        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally()
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
        const { displayName,
          email,
          photoURL,
          createdAt, uid } = user
        dispatch(setUser({
          displayName,
          email,
          photoURL,
          createdAt, uid
        }))
        getIdToken(user)
          .then(idToken => setToken(idToken))
      } else {
        dispatch(setUser({}))
      }


    });

  }, [auth, dispatch])
  return {
    signInWithGoogle,
    handleRegister,
    loginUser,
    logOut,
  };
};

export default useFirebase;
