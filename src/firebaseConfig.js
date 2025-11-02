import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO476Ws68GlxismOAzqHSiuC7uTwfPXVQ",
  authDomain: "my-react-app-a21b1.firebaseapp.com",
  projectId: "my-react-app-a21b1",
  storageBucket: "my-react-app-a21b1.firebasestorage.app",
  messagingSenderId: "440653240453",
  appId: "1:440653240453:web:61c42ef5408322b3a2f1ec",
  measurementId: "G-031CRQ6EXT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
