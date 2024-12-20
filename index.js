var n = Math.random()*6
n=Math.floor(n)+1;
console.log(n);

var n1 = Math.random()*6
n1=Math.floor(n1)+1;
console.log(n1);

var Imgsource1 = "images/dice" + n + ".png";
var Imgsource2 = "images/dice" + n1 + ".png";


var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", Imgsource1);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", Imgsource2)


if(Imgsource1>Imgsource2){
    document.querySelector("h1").innerText = "🚩Player1 Won"

}

else if(Imgsource1=Imgsource2){
    document.querySelector("h1").innerText = "It's a tie please refresh"

}

else{
    document.querySelector("h1").innerText = "Player2 Won🚩"
}
