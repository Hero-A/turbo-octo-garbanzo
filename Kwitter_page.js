function log_Out(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "Kwitter.html"
    
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       likes:0,
   })
   document.getElementById("msg").value = "";
}