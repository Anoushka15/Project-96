var firebaseConfig = {
    apiKey: "AIzaSyClok7Jgcjr0TaCwQjpOSGdgAhzTt8CBqM",
    authDomain: "kwitter-project-9a8d1.firebaseapp.com",
    databaseURL: "https://kwitter-project-9a8d1-default-rtdb.firebaseio.com/",
    projectId: "kwitter-project-9a8d1",
    storageBucket: "kwitter-project-9a8d1.appspot.com",
    messagingSenderId: "556926584544",
    appId: "1:556926584544:web:dae3d6436588810279f285",
    measurementId: "G-5LGJEK9T95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location="Kwitter_room.html";
}


