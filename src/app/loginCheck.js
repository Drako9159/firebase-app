const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
export const loginCheck = (user) => {
  if (user) {
    loggedOutLinks.forEach((e) => (e.style.display = "none"));
    loggedInLinks.forEach((e) => (e.style.display = "block"));
  } else {
    loggedOutLinks.forEach((e) => (e.style.display = "block"));
    loggedInLinks.forEach((e) => (e.style.display = "none"));
  }
};
