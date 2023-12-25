var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1+1);
var randomImage= "dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
var winner=document.querySelector("h1").innerHTML="🏆Player 1 wins!";
else if(randomNumber1<randomNumber2)
var winner=document.querySelector("h1").innerHTML="Player 2 wins!🏆";
else if(randomNumber1=randomNumber2)
var winner=document.querySelector("h1").innerHTML="Tie!!!";