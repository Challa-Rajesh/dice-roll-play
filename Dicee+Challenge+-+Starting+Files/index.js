var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var str1 = "./images/dice"+randomNumber1+".png";
var str2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", str1);
document.querySelector(".img2").setAttribute("src", str2);

if(randomNumber1 > randomNumber2){
    //alert("Player1 Won");
    document.body.querySelector("h1").textContent = "🧍‍♀️ Player1 Wins! 🥳";
}
else if(randomNumber1 < randomNumber2){
    //alert("Player2 Won");
    document.body.querySelector("h1").textContent = "🧍 Player2 Wins! 🥳";
}
else{
    document.body.querySelector("h1").textContent = "🤜 Draw! 🤛";
}
