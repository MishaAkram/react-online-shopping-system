import firebase from "firebase";
const config = {
 
    apiKey: "AIzaSyBVwKD3DAW5bM-7sQAU49GbcIiAf3kMQPE",
    authDomain: "online-shopping-3f947.firebaseapp.com",
    projectId: "online-shopping-3f947",
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
