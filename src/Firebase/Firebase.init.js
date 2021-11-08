import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initFirebase;
