// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9oE8sj45IY-kafChlMhAtLHmPmRzq7Zg",
  authDomain: "firstnexappdb.firebaseapp.com",
  projectId: "firstnexappdb",
  storageBucket: "firstnexappdb.appspot.com",
  messagingSenderId: "989095469620",
  appId: "1:989095469620:web:6862a1f88786ca7f9be061",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "prima-raccolta"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});
export { app, db, querySnapshot };
