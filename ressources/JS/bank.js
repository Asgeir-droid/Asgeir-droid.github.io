// JavaScript Document
var pinkode = 2021
var pengar = 4000;

function skjekBank(){
	
	var penger = document.getElementById("pengar").value;
	var brukerpin = document.getElementById("pinkode").value;
	
	if (brukerpin == pinkode && penger <= 4000){
		document.getElementById("rp").style.color = "green";
		document.getElementById("fp").style.color = "white";
		document.getElementById("rpob").style.color = "white";
	}
	
	else if (pinkode != brukerpin){
		document.getElementById("fp").style.color = "red";
		document.getElementById("rpob").style.color = "white";
		document.getElementById("rp").style.color = "white";
	}
	
	else if (brukerpin == pinkode && penger >4000){
		document.getElementById("rpob").style.color = "blue";
		document.getElementById("rp").style.color = "white";
		document.getElementById("fp").style.color = "white";
    } 
}	
