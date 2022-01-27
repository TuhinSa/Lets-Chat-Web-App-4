function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyBnz7ssQVCQX1eVGzqa2TlnkTcsba9N2XA",
    authDomain: "lets-chat-web-app-b6ddb.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b6ddb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b6ddb",
    storageBucket: "lets-chat-web-app-b6ddb.appspot.com",
    messagingSenderId: "272287124391",
    appId: "1:272287124391:web:db6b390d8a59d66f97c482",
    measurementId: "G-P8BW208PMH"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");      
  room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        likes: 0
    })
    document.getElementById("message").value = ""
}