document.getElementsByTagName("nav")[0].firstElementChild.style.color ="blue";
document.getElementsByTagName("nav")[0].lastElementChild.style.color ="red";

//write ajavascript code to change  background of all <li> tags to cyan

Array.from(document.getElementsByTagName("li")).forEach((element)=>
{
    element.style.background="cyan";
})