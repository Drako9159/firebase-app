import "./app/firebase.js";
import "./app/signup.js";
import "./app/signin.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";

import { auth, db } from "./app/firebase.js";
import "./app/logOut.js";
import { loginCheck } from "./app/loginCheck.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
//Saber si la autenticacion ha cambiado
import { setUpPosts } from "./app/postList.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
//obtiene los documentos, pasa la colecion de consulta

onAuthStateChanged(auth, async (user) => {
  //consulta a base datos
  if (user) {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setUpPosts(querySnapshot.docs);
  } else {
    setUpPosts([]);
  }
  loginCheck(user);
});
