// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNGgZ7NI-mhGLvciF34a-J4puwjk57p0M",
  authDomain: "chill-gamer-493d7.firebaseapp.com",
  projectId: "chill-gamer-493d7",
  storageBucket: "chill-gamer-493d7.firebasestorage.app",
  messagingSenderId: "898796953295",
  appId: "1:898796953295:web:5d0afa7f3935606de6a1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;