import * as firebase from "firebase";
var Config = {
    apiKey: "AIzaSyBYpzie6RyCDKz4sTJQA7B6Lof4k-WMb7c",
    authDomain: "ps10826-maixuanhuy-asm.firebaseapp.com",
    databaseURL: "https://ps10826-maixuanhuy-asm.firebaseio.com",
    projectId: "ps10826-maixuanhuy-asm",
    storageBucket: "ps10826-maixuanhuy-asm.appspot.com",
    messagingSenderId: "440151028389",
    appId: "1:440151028389:web:c671541fff99c098b4d34c",
    measurementId: "G-ZKCD89BQ85"
  };
  // Initialize Firebase
 export default (firebaseConfig = firebase.initializeApp(Config));