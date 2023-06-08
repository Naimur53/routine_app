// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
// import firebaseConfig from "../src/Firebase/Firebase.config";

// // Initialize the Firebase app in the service worker by passing the generated config



// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {


//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });