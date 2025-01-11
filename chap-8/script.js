//difference between console.log and console.dir
//difference between tag name and node name

let x =document.getElementsByTagName('span')[0]
console.log(x)

let y =document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.firstChild.nodeName);

console.log(document.body.firstChild.nodeName);

console.log(document.body.firstElementChild.nodeName);

//difference between innerHTML and outerHTML

//innerHTML:-
sp.innerHTML;
sp.innerHTML= "<i>good morning</i>"
//outerHTML:-
sp.outerHTML;
sp.outerHTML="<div>good</div>"

title.innerText;
title.innerHTML;
title.textContent;












const para =document.getElementById('title')
para.style.backgroundColor="Green";
para.style.padding="8px";
para.style.borderRadius="10px";
