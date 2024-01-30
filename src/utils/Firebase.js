// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Hx4A71dg43fAdfX3VwE4RLvrPgwJbys",
  authDomain: "netflix-gpt-97529.firebaseapp.com",
  projectId: "netflix-gpt-97529",
  storageBucket: "netflix-gpt-97529.appspot.com",
  messagingSenderId: "230825340884",
  appId: "1:230825340884:web:d9795ffdb91f727c1cb041"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

