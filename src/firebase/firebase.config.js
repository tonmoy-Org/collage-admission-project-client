// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyKuOhE8cRIz-_HrxqmT0ABzLz84imrik",
  authDomain: "mentoring-org.firebaseapp.com",
  databaseURL: "https://mentoring-org-default-rtdb.firebaseio.com",
  projectId: "mentoring-org",
  storageBucket: "mentoring-org.appspot.com",
  messagingSenderId: "392433034586",
  appId: "1:392433034586:web:409a598127bd37c18d3f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;