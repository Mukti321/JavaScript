// change the card title 
let ctitle = document.getElementById("first")
ctitle.style.color="red";

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="red";
ctitles[1].style.color="green";
ctitles[2].style.color="navy";
console.log(ctitles)

document.querySelector(".this").style.color="white"
document.querySelector(".this").style.background="black"

console.log(document.querySelector(".card").getElementsByTagName("a"))