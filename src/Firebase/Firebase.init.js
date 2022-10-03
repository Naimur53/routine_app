import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";

const firebaseAuth = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
};
export default firebaseAuth;
