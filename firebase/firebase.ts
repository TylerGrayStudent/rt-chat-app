// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5OmiNiv3vgVduF5UGPQRC1YT4QDe5SYg",
  authDomain: "realtimechatapp-c1db9.firebaseapp.com",
  projectId: "realtimechatapp-c1db9",
  storageBucket: "realtimechatapp-c1db9.appspot.com",
  messagingSenderId: "144187350670",
  appId: "1:144187350670:web:7bc2f50ccafedc99b7f3df",
  measurementId: "G-3DBCLDR6CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const signInWithEmail = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const ref = collection(db, "users");
    const q = query(ref, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      console.log("missing user data");
      // await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   name: user.displayName,
      //   provider: "email",
      //   email: user.email,
      // });
    }
    return user;
  } catch (e: any) {
    console.error(e);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "email",
      email: email,
    });
    return user;
  } catch (e: any) {
    console.error(e);
    alert(e.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithEmail, registerWithEmailAndPassword, logout };
