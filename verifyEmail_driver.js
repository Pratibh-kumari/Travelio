// 🔹 Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔹 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCuntWsD_Dg22pGULwJdsWRKbLp-_6K6Ss",
  authDomain: "sih-resqtech.firebaseapp.com",
  projectId: "sih-resqtech",
  storageBucket: "sih-resqtech.appspot.com",
  messagingSenderId: "571974603317",
  appId: "1:571974603317:web:ff740ed932c1743c13177c"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔹 DOM Elements
const logrenBox = document.querySelector('.logren-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// 🔹 Form switching
registerLink.addEventListener('click', () => logrenBox.classList.add('active'));
loginLink.addEventListener('click', () => logrenBox.classList.remove('active'));

// 🔹 Registration
document.getElementById('registerForm').addEventListener('submit', async e => {
  e.preventDefault();

  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const licenseNo = document.getElementById('licenseNo').value.trim();
  const contactNo = document.getElementById('contactNo').value.trim();
  const carName = document.getElementById('carName').value.trim();

  try {
    // 1️⃣ Create user and send email verification
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    await sendEmailVerification(user);
    alert("Verification email sent! Check your inbox.");

    // 2️⃣ Save data to Firestore
    await setDoc(doc(db, "drivers", user.uid), {
      name,
      email,
      licenseNo,
      contactNo,
      carName,
      createdAt: serverTimestamp()
    });

    // 3️⃣ Sign out until verification
    await signOut(auth);
    logrenBox.classList.remove('active');
    e.target.reset();

  } catch(err) {
    alert(err.message);
  }
});

// 🔹 Login
document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    if(user.emailVerified){
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Email not verified. Please check inbox.");
      await signOut(auth);
    }
  } catch(err) {
    alert(err.message);
  }
});

// 🔹 Monitor auth state
onAuthStateChanged(auth, user => {
  if(user && !user.emailVerified){
    console.warn("User logged in but email not verified.");
  }
});

