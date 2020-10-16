// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var chars = ["a", "b", "j", "z"]
var nums = [1, 2, 3, 4, 5, 6, 7, 8]
var sChars = ["@", "$", "!", "%", "&"]
var emojis = ["😂", "😈", "😊", "🙄"]

var password = document.querySelector("#passwordArea")

function StartGenny() {
    var possibilties = []

    var length = parseInt(prompt("How long does this password need to be?"))
    
    if(length < 8 || length > 128 || isNaN(length)) {
        alert("invalid password option, refresh")
    } else {
        
        var charsTrue = confirm("Do you want characters?")
        var numsTrue = confirm("Do you want numbers?")
        var sCharsTrue = confirm("Do you want special characters?")
        var emojisTrue = confirm("Do you want emojis?")
    
        if (charsTrue) possibilties.push(chars)
        if (numsTrue) possibilties.push(nums)
        if (sCharsTrue) { possibilties.push(sChars) }
        if (emojisTrue) { possibilties.push(emojis) }
    
        var pw = ""
    
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

// Add event listener to button
document.querySelector("#StartGenny").addEventListener("click", StartGenny)

console.log("😈".length)
console.log("😒".length)