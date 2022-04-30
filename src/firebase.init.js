// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpN9WYV9AgWh7QIHfaqtJMfuQj_n9NcI",
  authDomain: "genius-car-services-9c6fd.firebaseapp.com",
  projectId: "genius-car-services-9c6fd",
  storageBucket: "genius-car-services-9c6fd.appspot.com",
  messagingSenderId: "84990741017",
  appId: "1:84990741017:web:f2fc83f138e4b83fb7f888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth