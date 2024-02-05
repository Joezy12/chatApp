

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyd6Wh-w0tq6hHE5OAVWz9Fl7apdqZ1Eg",
  authDomain: "wiseapp-ce09e.firebaseapp.com",
  projectId: "wiseapp-ce09e",
  storageBucket: "wiseapp-ce09e.appspot.com",
  messagingSenderId: "544309571475",
  appId: "1:544309571475:web:68a8caf53209e40df98266",
  measurementId: "G-3NWTFXZXMM"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);