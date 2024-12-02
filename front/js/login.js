import { UserLogin } from "./service/authenticateService.js";

const email = document.getElementById("email");
const password = document.getElementById("password");


document.addEventListener("DOMContentLoaded", async () => {
    console.log("Teste")
})

document.getElementById("submitAuth").addEventListener("click", async() => {

    if(email.value == '' || password.value == ''){
        alert("Email e senha precisa ser preenchido.")
        return
    }

    let response = await UserLogin(email.value, password.value)

    if(response.status == 400){
        alert("Email ou Senha não reconhecido.")
        return
    }

    sessionStorage.setItem("Token", response.token);
    window.location.href = 'http://www.localhost:5500/panel-control.html';
})