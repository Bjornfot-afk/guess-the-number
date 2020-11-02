function getUserGuess(){
    document.getElementById("message").innerHTML = "Nu har du gissat!"
   const input = document.getElementById("user-input").value;
   return parseInt(input)
}

document.addEventListener("keyup", function (event) {
if (event.key === "Enter") {
    const svar = getUserGuess()
    console.log(svar)
}
else {
    document.getElementById("message").innerHTML = "Du har inte gissat"
}
})
