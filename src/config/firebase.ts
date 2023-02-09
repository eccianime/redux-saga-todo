import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1m0r3tEe-zYKSFAucsv0WlkNVlvIYK-4",
  authDomain: "todo-list-sagas.firebaseapp.com",
  databaseURL: "https://todo-list-sagas-default-rtdb.firebaseio.com",
  projectId: "todo-list-sagas",
  storageBucket: "todo-list-sagas.appspot.com",
  messagingSenderId: "446519604901",
  appId: "1:446519604901:web:6382a81e926ff7c82d7f4c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
