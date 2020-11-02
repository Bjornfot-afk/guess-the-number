function getUserGuess(){
   const input = document.getElementById("user-input").value;
   return parseInt(input)
}
document.addEventListener("keyup", function (event) {
if (event.key === "Enter") {
    const svar = getUserGuess()
    console.log(svar)
if (svar === 69)
document.getElementById("message").innerHTML = "Du har gissat Rätt!!!"
if (svar === 96)
document.getElementById("message").innerHTML = "Extremt Nära!"
if (svar > 69)
document.getElementById("message").innerHTML = "Mindre!"
if (svar < 69)
document.getElementById("message").innerHTML = "Större!"
}
else {
    document.getElementById("message").innerHTML = "Du har inte gissat än"
}
})
