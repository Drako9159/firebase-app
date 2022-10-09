import "./app/firebase.js";
import "./app/signup.js";
import "./app/signin.js";
import { auth } from "./app/firebase.js";
import "./app/logOut.js";
import { loginCheck } from "./app/loginCheck.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
//Saber si la autenticacion ha cambiado

onAuthStateChanged(auth, async (user) => {
  //consulta a base datos
  if (user) {
    loginCheck(user);
  } else {
    loginCheck(user);
  }
});
