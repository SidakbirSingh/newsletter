import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyArIbCvzv7iodik2O0M9sZft2oWOY7rZAQ",
    authDomain: "newsletter-app-22713.firebaseapp.com",
    databaseURL: "https://newsletter-app-22713-default-rtdb.firebaseio.com",
    projectId: "newsletter-app-22713",
    storageBucket: "newsletter-app-22713.appspot.com",
    messagingSenderId: "768172499390",
    appId: "1:768172499390:web:d74c41eb780a9a8cf3d9ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();