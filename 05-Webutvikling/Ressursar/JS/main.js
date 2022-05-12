// JavaScript Document
var nummer1 = 23;
var nummer2 = 73;
var sum = nummer1 + nummer2;
alert(sum);

var fornavn = "Jhon ";
var etternavn = "Doe";
var velkommen ="velkommen " + fornavn + etternavn;
var takk ="Så fint at du ville komme her, " + fornavn;

alert(velkommen + " " + takk);

var heissan;
var navnetDitt = prompt("Skriv inn navnet ditt");

heissan = "Velkommen " + navnetDitt + ".";
document.getElementById("navn").innerHTML = heissan;

function sjekkSvar(){
var svar = document.getElementById("s1");
var gratulerer;
var fsvar;

if(svar.value == "jonas gahr støre"){
	gratulerer = "GRATULERER! DU HADDE RETT!";
}

else{
	fsvar = "PRØV IGJEN";
}

document.getElementById("sp").innerHTML = gratulerer;
document.getElementById("fs").innerHTML = fsvar;
}
	