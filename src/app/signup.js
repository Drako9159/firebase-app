import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
//Nos permite creat un usuario con correo y contraseña
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const $signUpForm = document.querySelector("#signup-form");

$signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $signUpForm["signup-email"].value;
  const password = $signUpForm["signup-password"].value;
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    //close modal
    const signUpModal = document.querySelector("#signup-modal");
    const modal = bootstrap.Modal.getInstance(signUpModal);
    modal.hide();
    showMessage("Welcome" + " " + userCredentials.user.email, "success");
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("Invalid email", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("PEassword is to weak", "error");
    } else if (error.code) {
      showMessage("Someting went wrong", "error");
    }
  }
});
