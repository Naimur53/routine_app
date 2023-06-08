// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCwm9-5tdfv_Ij5GMrfhPGsV1005irANoM",
//   authDomain: "routineapp-f9172.firebaseapp.com",
//   projectId: "routineapp-f9172",
//   storageBucket: "routineapp-f9172.appspot.com",
//   messagingSenderId: "846074449800",
//   appId: "1:846074449800:web:6f60aa1e3477db0cc1343d",
//   measurementId: "G-7NST9SF7DK",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
  projectId: process.env.REACT_APP_PUBLIC_PROJECTID,
  authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_PUBLIC_APP_ID,
  measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
};
export default firebaseConfig;
