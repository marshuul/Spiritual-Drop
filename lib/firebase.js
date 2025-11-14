// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config (from .env, but hardcoded for now)
const firebaseConfig = {
  apiKey: "AIzaSyBD-lAHhNK-nufwiAaQQ8aRGuuHNuLbwAo",
  authDomain: "julie-advanced.firebaseapp.com",
  projectId: "julie-advanced",
  storageBucket: "julie-advanced.firebasestorage.app",
  messagingSenderId: "752516942322",
  appId: "1:752516942322:web:714b96942edbdde2fb036b",
  measurementId: "G-S4NQZE6N3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
