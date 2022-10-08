// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqbGmd9junCvNZIaGVTXP-x7AwPdqTEok",
  authDomain: "fir-app-df341.firebaseapp.com",
  projectId: "fir-app-df341",
  storageBucket: "fir-app-df341.appspot.com",
  messagingSenderId: "709742168445",
  appId: "1:709742168445:web:c4fc3f347885282a5ae414",
  measurementId: "G-7Z7BD9FF9Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
