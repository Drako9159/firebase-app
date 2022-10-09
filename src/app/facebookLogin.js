import {
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
const $facebookButton = document.querySelector("#facebook-login");
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
$facebookButton.addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#signin-modal")
    );
    modal.hide();
    showMessage("Welcome " + credentials.user.displayName, "success");
  } catch (error) {
    console.log(error);
  }
});
