// verifyEmail.js

// 1️⃣ Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCuntWsD_Dg22pGULwJdsWRKbLp-_6K6Ss",
  authDomain: "sih-resqtech.firebaseapp.com",
  projectId: "sih-resqtech",
  storageBucket: "sih-resqtech.firebasestorage.app",
  messagingSenderId: "571974603317",
  appId: "1:571974603317:web:ff740ed932c1743c13177c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 2️⃣ Signup function
export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      sendEmailVerification(user)
        .then(() => {
          alert("Verification email sent! Check your inbox.");
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
        });
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
    });
}

// 3️⃣ Login function
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        alert("Login successful!");
      } else {
        alert("Email not verified. Please check your inbox.");
        signOut(auth); // optional: prevent access
      }
    })
    .catch((error) => {
      console.error("Login error:", error.message);
    });
}

// 4️⃣ Monitor auth state (optional, useful for protected pages)
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (!user.emailVerified) {
      console.warn("User logged in but email not verified");
    }
  } else {
    console.log("No user signed in");
  }
});

// 5️⃣ Optional: Resend verification email
export function resendVerification() {
  const user = auth.currentUser;
  if (user && !user.emailVerified) {
    sendEmailVerification(user)
      .then(() => alert("Verification email resent!"))
      .catch((error) => console.error("Error resending verification:", error));
  } else {
    alert("No unverified user logged in");
  }
}
