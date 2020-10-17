// All of my arrays for the password generator

var chars = ["a", "b", "c", "d", "e", "q", "j", "z"]
var uChars = ["A", "G", "F", "X", "V", "K", "R", "Y"]
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var sChars = ["@", "$", "!", "%", "&", "*", "^", "©", "☯︎", "☮︎", "Ω"]
var emojis = ["😂", "😈", "😊", "🙄", "🥺", "😳", "🙈", "😉", "😅", "🤨", "🤓", "🙃"]
var password = document.querySelector("#passwordArea")

// Making a function that rolls through all my arrays and gives the person options on what they do/dont want in their password

function StartGenny() {
    var possibilties = []
    var length = parseInt(prompt("How long does this password need to be?"))
    
    if(length < 8 || length > 128 || isNaN(length)) {
        alert("invalid password option, refresh")
    } else {
        
        var charsTrue = confirm("Do you want lowercase letters?")
        var uCharsTrue = confirm("Do you want uppercare letters")
        var numsTrue = confirm("Do you want numbers?")
        var sCharsTrue = confirm("Do you want special symbols?")
        var emojisTrue = confirm("Do you want emojis?")
    
        if (charsTrue) possibilties.push(chars)
        if (uCharsTrue) possibilties.push(uChars)
        if (numsTrue) possibilties.push(nums)
        if (sCharsTrue) possibilties.push(sChars)
        if (emojisTrue) possibilties.push(emojis)
    
        var pw = ""
    
        // for loop running through all my possibilties for the password
    while (pw.length < length) {
        for (let i = 0; i < possibilties.length; i++) {
            if (pw.length < length){
                let rand = Math.floor(Math.random() * possibilties[i].length)
                pw += possibilties[i][rand]
                }
            }
        }
    
        console.log(pw, "password length: ${pw.length}")
        password.textContent = pw
    }
}

// Added event listener to the button
document.querySelector("#StartGenny").addEventListener("click", StartGenny)

console.log("😈".length)
console.log("😒".length)