import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import OnlineRoute from '../ShareComponents/OnlineRoute/OnlineRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Overview from '../Dashboard/DashboardPages/Overview/Overview';
import AllRequestRoutines from '../Dashboard/DashboardPages/AllRequestRoutines/AllRequestRoutines';
import AllUsers from '../Dashboard/DashboardPages/AllUsers/AllUsers';
import CreateRequestRoutine from '../Dashboard/DashboardPages/CreateRequestRoutine/CreateRequestRoutine';
import ManageRoutine from '../Dashboard/DashboardPages/ManageRoutine/ManageRoutine';
import UpdateRoutine from '../UpdateRoutine/UpdateRoutine';
import { AnimatePresence } from 'framer-motion';
import SignUp from '../SignUp/SignUp';
import EditeProfile from '../EditeProfile/EditeProfile';
import ContactUs from '../ContactUs/ContactUs';
import MainLayout from '../ShareComponents/MainLayout/MainLayout';
import MyNotes from '../MyNote/MyNotes';
import SaveRoutine from '../SaveRoutine/SaveRoutine';
import SearchRoutine from '../SearchRoutine/SearchRoutine';
import MyRoutine from '../MyRoutine/MyRoutine';
import CreateRoutine from '../CreateRoutine/CreateRoutine';
import Checkout from '../SearchRoutine/Checkout/Checkout';
import MyProfile from '../MyProfile/MyProfile';
import RequestForRoutine from '../RequestForRoutie/RequestForRoutine';
import ViewProfile from '../ViewProfile/ViewProfile';
import ManageAdmin from '../Dashboard/DashboardPages/ManageAdmin/ManageAdmin';
import Notification from '../Dashboard/Notification/Notification';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import PageTransitions from '../AnimationCompo/PageTransitions/PageTransitions';

const AppRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<Login />}></Route>
                {/* <Route path="/signUp" element={<SignUp />}></Route> */}


                <Route
                    path="/login"
                    element={
                        <OnlineRoute>
                            <Login />
                        </OnlineRoute>
                    }
                ></Route>

                <Route
                    path="/signUp"
                    element={
                        <OnlineRoute>
                            <SignUp />
                        </OnlineRoute>
                    }
                ></Route>

                {/* not working on this */}


                <Route path="/" element={<MainLayout />}>

                    <Route index element={<PageTransitions path="/" ><Home /></PageTransitions>}></Route>

                    <Route path="home" element={<PageTransitions path="/home"><Home /></PageTransitions>}></Route>
                    {/* <Route path="/myNotes" element={<MyNotes />}></Route> */}
                    <Route path="/saveRoutine" element={<PageTransitions path="/saveRoutine" ><SaveRoutine /></PageTransitions>}></Route>

                    <Route path="/contactUs" element={<ContactUs />}></Route>


                    <Route
                        path="/editProfile"
                        element={
                            <PrivateRoute>
                                < >
                                    <EditeProfile />
                                </>
                            </PrivateRoute>
                        }
                    ></Route>

                    <Route
                        path="/searchRoutine"
                        element={
                            <OnlineRoute>
                                <PageTransitions path="/searchRoutine">

                                    <SearchRoutine />
                                </PageTransitions>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/myRoutine"
                        element={
                            <OnlineRoute>
                                <PrivateRoute>
                                    <PageTransitions path="/myRoutine">
                                        <MyRoutine />
                                    </PageTransitions>
                                </PrivateRoute>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/createRoutine"
                        element={
                            <OnlineRoute>
                                <PrivateRoute>
                                    < >
                                        <PageTransitions path="/createRoutine">

                                            <CreateRoutine />
                                        </PageTransitions>

                                    </>
                                </PrivateRoute>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/checkout/:id"
                        element={
                            <OnlineRoute>
                                <PageTransitions path="/checkout">

                                    <Checkout />
                                </PageTransitions>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/myProfile"
                        element={
                            <OnlineRoute>
                                <PrivateRoute>
                                    <PageTransitions path="/myProfile">

                                        <MyProfile />
                                    </PageTransitions>
                                </PrivateRoute>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/update/:id"
                        element={
                            <OnlineRoute>
                                <PrivateRoute>
                                    <PageTransitions path="/update/" >

                                        <UpdateRoutine />
                                    </PageTransitions>
                                </PrivateRoute>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route
                        path="/requestForRoutine"
                        element={
                            <OnlineRoute>
                                <PrivateRoute>
                                    <PageTransitions path="/requestForRoutine">

                                        <RequestForRoutine />
                                    </PageTransitions>
                                </PrivateRoute>
                            </OnlineRoute>
                        }
                    ></Route>
                    <Route path="viewProfile/:id" element={<ViewProfile />}></Route>
                </Route>

                {/* ---------------------dashboard routes -------------------------- */}

                <Route
                    path="/dashboard"
                    element={
                        <OnlineRoute>
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        </OnlineRoute>
                    }
                >
                    <Route index element={<Overview />}></Route>
                    <Route
                        path="allRequestRoutines"
                        element={<AllRequestRoutines />}
                    ></Route>
                    <Route path="allUsers" element={<AllUsers />}></Route>

                    <Route
                        path="createRequestRoutine/:id"
                        element={<CreateRequestRoutine />}
                    ></Route>

                    <Route path="manageRoutine" element={<ManageRoutine />}></Route>
                    <Route
                        path="manageRoutine/update/:id"
                        element={<UpdateRoutine admin={true} />}
                    ></Route>
                    <Route path="manageAdmin" element={<ManageAdmin />}></Route>
                    <Route path="notification" element={<Notification />}></Route>
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;