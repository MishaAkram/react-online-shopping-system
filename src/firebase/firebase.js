import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVwKD3DAW5bM-7sQAU49GbcIiAf3kMQPE",
    authDomain: "online-shopping-3f947.firebaseapp.com",
    databaseURL: "https://online-shopping-3f947-default-rtdb.firebaseio.com",
    projectId: "online-shopping-3f947",
    storageBucket: "online-shopping-3f947.appspot.com",
    messagingSenderId: "858377131709",
    appId: "1:858377131709:web:ed3e767aaf43e7c10589d4",
    measurementId: "G-3W2VG882JQ"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;