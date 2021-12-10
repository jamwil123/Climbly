// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIFi16hlMr55-Z9rVMxsYphfolDL2RhU",
  authDomain: "hills-app-test-db.firebaseapp.com",
  projectId: "hills-app-test-db",
  storageBucket: "hills-app-test-db.appspot.com",
  messagingSenderId: "40222882478",
  appId: "1:40222882478:web:ed73cfe9baa15e65e7cb3f",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };