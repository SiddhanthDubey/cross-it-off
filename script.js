let username = document.getElementById('username');
const submitButton = document.querySelector('button');

submitButton.onclick = printing;

function printing(){
    document.cookie = "username="+username.value;
    window.open("home.html")
}




 