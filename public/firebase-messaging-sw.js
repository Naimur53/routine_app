// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
    projectId: process.env.REACT_APP_PUBLIC_PROJECTID,
    authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_PUBLIC_APP_ID,
    measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {


    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});