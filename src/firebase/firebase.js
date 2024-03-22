import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyClVa6NvRuFLC5KxHbvu0nJGZpxsD0p2ac",
    authDomain: "fe-brave.firebaseapp.com",
    projectId: "fe-brave",
    storageBucket: "fe-brave.appspot.com",
    messagingSenderId: "525430170976",
    appId: "1:525430170976:web:4d4a5fe0100a086ba4ea05",
    measurementId: "G-7XSJD44G6Y"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  
  export { auth };