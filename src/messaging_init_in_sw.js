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
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const app = initializeApp(firebaseConfig);
            const messaging = getMessaging(app);

            getToken(messaging, { vapidKey: 'BK9Dmr-FK93B3HcHPC5zN38jj5FY4cYNXv3rrHb625HnJFrUp8604TYsmtEdabgtg0Jp0U96dZuEx2CoIMLShGI' }).then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    axios.post('http://localhost:5001/notificationToken', { token: currentToken })
                    // ...
                    console.log({ token: currentToken }, "dfkfdf")
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        } else {
            console.log('Do not have permission for notification ')
        }
    });
}
requestPermission()