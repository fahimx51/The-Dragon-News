// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkAFmGhqJ8XUEdzVwvWDN5SsJgoGkmAWA",
  authDomain: "the-dragon-news-ed711.firebaseapp.com",
  projectId: "the-dragon-news-ed711",
  storageBucket: "the-dragon-news-ed711.firebasestorage.app",
  messagingSenderId: "619200870898",
  appId: "1:619200870898:web:27da3fcdbc778df7da136b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);