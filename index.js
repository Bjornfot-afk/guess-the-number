function getUserGuess(){
    document.getElementById("message").innerHTML = "Du gissade inte rätt. Tips tal nära 70"
   const input = document.getElementById("user-input").value;
   return parseInt(input)
}
document.addEventListener("keyup", function (event) {
if (event.key === "Enter") {
    const svar = getUserGuess()
    console.log(svar)
if (svar === 69)
document.getElementById("message").innerHTML = "Du har gissat Rätt"
}
else {
    document.getElementById("message").innerHTML = "Du har inte gissat än"
}
})
