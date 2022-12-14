// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//fireStore
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
//Utilidad para autenticar
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
//Se activa la autenticación en la app
export const db = getFirestore(app);
//obtiene la base de datos
