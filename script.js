import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAQgr3UdVY0kveJjtFsTYYYewBj5_Jrv48",
    authDomain: "authentication-df9d2.firebaseapp.com",
    projectId: "authentication-df9d2",
    storageBucket: "authentication-df9d2.appspot.com",
    messagingSenderId: "578361908860",
    appId: "1:578361908860:web:544d1d33a16b3e215a33f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);

// Function to handle registration
function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registration successful
            const user = userCredential.user;
            console.log(user);
            alert("Registration successfully!!");
        })
        .catch((error) => {
            // Registration failed, handle the error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
}

// Add an event listener to the registration button
document.getElementById("register").addEventListener("click", register);

// document.getElementById("login").addEventListener("click", function() {
//     var email =  document.getElementById("login_email").value;
//     var password = document.getElementById("login_password").value;

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user);
//         alert(user.email+" Login successfully!!!");
//         document.getElementById('logout').style.display = 'block';
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         alert(errorMessage);
//     });		  		  
// });
// //----- End

// //----- Logout code start	  
// document.getElementById("logout").addEventListener("click", function() {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log('Sign-out successful.');
//         alert('Sign-out successful.');
//         document.getElementById('logout').style.display = 'none';
//         }).catch((error) => {
//         // An error happened.
//         console.log('An error happened.');
//         });		  		  
// });
