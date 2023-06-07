// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// // Initialize the Firebase app in the service worker by passing the generated config
// var firebaseConfig = {
//     apiKey: "AIzaSyCwm9-5tdfv_Ij5GMrfhPGsV1005irANoM",
//     authDomain: "routineapp-f9172.firebaseapp.com",
//     projectId: "routineapp-f9172",
//     storageBucket: "routineapp-f9172.appspot.com",
//     messagingSenderId: "846074449800",
//     appId: "1:846074449800:web:6f60aa1e3477db0cc1343d",
//     measurementId: "G-7NST9SF7DK",
// };

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