import React, { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    getRedirectResult,
    signInWithRedirect,
    signOut,
    getIdToken,
    sendEmailVerification,
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
import { toast } from "react-toastify";

firebaseAuth();
const useFirebase = ({ observer }) => {
    // const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    // const [token, setToken] = useState("");
    // const { loading, user } = useSelector(allData);
    // const [dataSaveFail, setDataSaveFail] = useState(0);
    const dispatch = useDispatch();
    const auth = getAuth();

    // utilities
    const saveUser = ({
        displayName,
        email,
        photoURL,
        createdAt,
        lastLoginAt,
        lastSignInTime,
        isEmailVerified,
        uid,
        method,
    }) => {
        return axios[method]("https://routineappserver-production-5617.up.railway.app/user", {
            displayName,
            email,
            photoURL,
            createdAt,
            lastLoginAt,
            lastSignInTime,
            isEmailVerified,
            uid,
        });
    };

    // handle error if user filed to save data
    // useEffect(() => {
    //     if (dataSaveFail) {
    //         saveUser({ ...user, method: "put" })
    //             .then((res) => {
    //                 setDataSaveFail(0);
    //             })
    //             .catch((error) => {
    //                 if (dataSaveFail <= 3) {
    //                     setDataSaveFail(dataSaveFail + 1);
    //                 } else {
    //                     // alert("cant able to save user info");
    //                 }
    //             });
    //     }
    // }, [dataSaveFail]);
    const takeUserInfo = (user) => {

    }
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
            .then(({ user }) => {
                setAuthError("");

                console.log(
                    "from CreateUserWithEmailAndPassword ",
                    user
                );


                const userInfo = {
                    displayName: name,
                    email: user.email,
                    photoURL: "https://i.ibb.co/1drKb3X/user.png",
                    createdAt: user.metadata.createdAt,
                    lastLoginAt: user.metadata.lastLoginAt,
                    lastSignInTime: user.metadata.lastSignInTime,
                    uid: user.uid,
                    isEmailVerified: user.emailVerified

                };
                // set data to redux
                sendEmailVerification(auth.currentUser)
                    .then((res) => {
                        console.log("Email verification sent", { res });

                        saveUser({ ...userInfo, method: "put" })
                            .then((res) => {
                                // dispatch(setUser(res.data));
                                dispatch(setUser({ ...userInfo, _id: res.data._id }));

                                // change route
                                const url = location?.state?.from || "/";
                                navigate(url);
                                dispatch(setLoading(false));
                            })
                            .catch((error) => {
                                logOut()
                                dispatch(setLoading(false));
                                toast.error('Something went wrong try again! ')
                            });

                    })
                    .catch((error) => {
                        console.error("Email verification error:", error);
                    });


                // setUser(newUser);
                // send name to firebase after creation
                // updateProfile(auth.currentUser, {
                //     displayName: name,
                //     photoURL: "https://i.ibb.co/1drKb3X/user.png",
                // })
                //     .then((res) => { })
                //     .catch((error) => { });
            })
            .catch((error) => {
                dispatch(setLoading(false));
                setAuthError(error.message);
            })
            .finally();
    };
    // login in user
    const loginUser = ({ email, password, location, navigate }) => {
        dispatch(setLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const url = location?.state?.from || "/";
                navigate(url);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
                dispatch(setLoading(false));
            });
    };

    // google authentication 
    const loginUserWithGoogleRedirect = () => {
        dispatch(setLoading(true))
        signInWithRedirect(auth, googleProvider)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                toast.error("Something went wrong!")

            })
    }

    useEffect(() => {
        if (observer) {
            getRedirectResult(auth)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;

                    // The signed-in user info.
                    const user = result.user;

                    const userInfo = {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL || "https://i.ibb.co/1drKb3X/user.png",
                        createdAt: user.metadata.createdAt,
                        lastLoginAt: user.metadata.lastLoginAt,
                        lastSignInTime: user.metadata.lastSignInTime,
                        uid: user.uid,
                        isEmailVerified: user.emailVerified

                    };
                    saveUser({ ...userInfo, method: "put" })
                        .then((res) => {
                            // dispatch(setUser(res.data));
                            dispatch(setUser({ ...userInfo, _id: res.data._id }));

                            // // change route
                            // const url = location?.state?.from || "/";
                            // navigate(url);
                            dispatch(setLoading(false));
                        })
                        .catch((error) => {
                            logOut()
                            dispatch(setLoading(false));
                            toast.error('Something went wrong try again! ')
                        });
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error?.customData?.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        }
    }, [auth, observer])
    // observer
    useEffect(() => {
        if (observer) {
            dispatch(setLoading(true));
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    const { displayName, email, photoURL, createdAt, uid, emailVerified } = user;
                    console.error({ user });
                    //   console.log("from onAuthStateChange ", user);
                    console.log('i ama on observer and making get request to server !');
                    dispatch(
                        getUserFromDB({
                            displayName,
                            email,
                            photoURL,
                            createdAt,
                            uid,
                            isEmailVerified: emailVerified,
                        })
                    );

                    // getIdToken(user)
                    //   .then(idToken =>)
                } else {
                    dispatch(setLoading(false));
                    // set data {} as i have give nothing
                    dispatch(setUser({ set: true }));
                }
            });
            return () => {
                unsubscribed()
            }
        }
    }, [auth, dispatch, observer]);




    return {
        signInWithGoogle,
        handleRegister,
        loginUser,
        logOut,
        authError,
        auth,
        loginUserWithGoogleRedirect,
    };
};

export default useFirebase;
