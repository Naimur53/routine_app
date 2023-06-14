import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseConfig from "./Firebase/Firebase.config";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
// };

// Initialize Firebase

// Initialize Firebase Cloud Messaging and get a reference to the service

function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      getToken(messaging, {
        vapidKey: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGE,
      })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            axios.post(
              "https://routineappserver-production-5617.up.railway.app/notificationToken",
              {
                token: currentToken,
              }
            );
            // ...
          } else {
            // Show permission request UI
            // ...
          }
        })
        .catch((err) => {
          // ...
        });
    } else {
    }
  });
}
requestPermission();
