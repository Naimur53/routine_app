import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseAuth = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

};
export default firebaseAuth;

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

