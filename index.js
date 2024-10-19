const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let generateBtn = document.getElementById("generate-btn")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePassword() {

    for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random * 15)
        password1El.textContent =+ characters[randomIndex]
    }
    for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random * 15)
        password2El.textContent =+ characters[randomIndex]
    }

}

generateBtn.addEventListener("click", generatePassword())

