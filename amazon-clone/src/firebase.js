import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDsxOzlYJISSUF5NMX-lhIGIQeYvxSTKqI",
    authDomain: "challenge-8c19d.firebaseapp.com",
    databaseURL: "https://challenge-8c19d.firebaseio.com",
    projectId: "challenge-8c19d",
    storageBucket: "challenge-8c19d.appspot.com",
    messagingSenderId: "966934545673",
    appId: "1:966934545673:web:c333d2f6e1cf08f5bd7fd8",
    measurementId: "G-93J6H4G4TV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };