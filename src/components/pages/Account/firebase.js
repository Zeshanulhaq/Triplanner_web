import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA6bz_fZrzJgtIaS0Fbl0JiS1ENf1pg94A",
  authDomain: "trip-planner-web-4997d.firebaseapp.com",
  projectId: "trip-planner-web-4997d",
  storageBucket: "trip-planner-web-4997d.appspot.com",
  messagingSenderId: "1091636087519",
  appId: "1:1091636087519:web:5a24d079e3c76dff50376a"
});

export const auth = app.auth();
export default app;
