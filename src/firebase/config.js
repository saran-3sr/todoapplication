// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHehABqZmHssinl8IEtFP2g0A9pcUQWA",
  authDomain: "todo-app-cc048.firebaseapp.com",
  projectId: "todo-app-cc048",
  storageBucket: "todo-app-cc048.appspot.com",
  messagingSenderId: "101724104396",
  appId: "1:101724104396:web:bbfabfebcc43cd96f20469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();

export {projectFirestore,projectStorage}