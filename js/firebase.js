const initializeApp = require('initializeApp');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-7y84EQcm9pxt4uehSI7aFO-0NHT4ThU",
  authDomain: "blogging-website-d7085.firebaseapp.com",
  projectId: "blogging-website-d7085",
  storageBucket: "blogging-website-d7085.appspot.com",
  messagingSenderId: "247679849697",
  appId: "1:247679849697:web:feecb96d730d152297d3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();