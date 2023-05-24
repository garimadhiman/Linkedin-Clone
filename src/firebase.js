// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { GoogleAuthProvider } from "firebase/auth";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-mqFZyhhwctQjGDNOX7Dt5sgZ1kfAl2M",
  authDomain: "linkedin-clone-7ed71.firebaseapp.com",
  projectId: "linkedin-clone-7ed71",
  storageBucket: "linkedin-clone-7ed71.appspot.com",
  messagingSenderId: "351807192367",
  appId: "1:351807192367:web:15833860a160f7e831f5da"
};
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(app);
// export {auth, provider, storage};
// export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
