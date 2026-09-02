
document.getElementById("username").innerHTML="Admin";

document.getElementById("email").innerHTML="admin@gmail.com";

document.getElementById("role").innerHTML="System Administrator";

function logout(){

localStorage.removeItem("token");

window.location.href="login.html";

}