  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBuh8_rr5gZecGouCbC2fmHG-4clc8kcVg",
    authDomain: "page-strangerthings.firebaseapp.com",
    projectId: "page-strangerthings",
    storageBucket: "page-strangerthings.appspot.com",
    messagingSenderId: "1018185895843",
    appId: "1:1018185895843:web:176f4a6659d34286999416"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app

  // exportando banco de dados //