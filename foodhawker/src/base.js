import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlIyZOeKWbHzKMmYA4Oq-wKcJdIdJ36vU",
  authDomain: "food-hawker.firebaseapp.com",
  databaseURL: "https://food-hawker-default-rtdb.firebaseio.com",
  projectId: "food-hawker",
  storageBucket: "food-hawker.appspot.com",
  messagingSenderId: "17441385491",
  appId: "1:17441385491:web:addbcf2c21a132955523e6",
  measurementId: "G-64B3499QXP",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);