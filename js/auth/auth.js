import { auth, db } from "../../lib/firebase.js";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const googleBtn = document.querySelector(
  ".providers-container:first-child .providers"
);
const githubBtn = document.querySelector(
  ".providers-container:last-child .providers"
);

async function loginWithProvider(provider) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Fetch user info from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    let userData = {
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      uid: user.uid,
    };
    if (userDoc.exists()) {
      userData = { ...userData, ...userDoc.data() };
    }
    // Store user context in localStorage
    localStorage.setItem("userContext", JSON.stringify(userData));
    // Redirect to home page
    window.location.href = "../index.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

googleBtn.addEventListener("click", () => {
  loginWithProvider(new GoogleAuthProvider());
});

githubBtn.addEventListener("click", () => {
  loginWithProvider(new GithubAuthProvider());
});
