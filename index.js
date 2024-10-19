const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePassword() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random * 15)
        password1 =+ characters[randomIndex]
    }
    for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random * 15)
        password2 =+ characters[randomIndex]
    }


    console.log(password1)
    console.log(password2)
    password1El.textContent(password1)
    password2El.textContent(password2)
}

generateBtn.addEventListener("click", generatePassword())

