// document.querySelector("button").addEventListener("click",function(){alert("I got clicked!")}) // First button only


var total= document.querySelectorAll(".drum").length;
for(i=0; i<total; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){alert("I got clicked!")})

}//All buttons display when clicked