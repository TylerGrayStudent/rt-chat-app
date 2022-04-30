// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ApiUser } from "../models/User";

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
    await ensureUserIsRegistered(user.uid, user);
    return user;
  } catch (e: any) {
    console.error(e);
  }
};

const ensureUserIsRegistered = async (id: string, user: User) => {
  const res = await fetch("http://localhost:3001/users/" + id)
    .then((x) => {
      return x.json();
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  if (res) {
    console.log("user already registered");
    return;
  }
  const apiUser: ApiUser = {
    _id: id,
    username: user.displayName ?? "",
    email: user.email ?? "",
    createdAt: new Date(),
    friends: [],
  };

  const creationRes = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiUser),
  })
    .then((x) => {
      return x.json();
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (!creationRes) {
    alert("Error creating user");
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
