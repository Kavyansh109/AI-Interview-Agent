import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkDPQfwU981hzWqAk1KsHFFdI-1NLL89U",
  authDomain: "interview-agent-7e9f6.firebaseapp.com",
  projectId: "interview-agent-7e9f6",
  storageBucket: "interview-agent-7e9f6.firebasestorage.app",
  messagingSenderId: "79224133077",
  appId: "1:79224133077:web:4c747601b3873d6b96595c",
  measurementId: "G-ZKQLMHZ8WE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider };