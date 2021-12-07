// JavaScript Document
function chekAnswer(){
	var poeng = 0;
	var a1 = document.getElementById("q1");
	
	if(a1.value == "jonas ghar støre"){
		alert("Du har rett svar rett på nr 1")
		poeng = poeng + 1;
	}
	
	var a2 = document.getElementById("q2")
	
	if(a2.value == "joe biden"){
		alert("Du har rett svart på nr 2")
		poeng = poeng + 1;
	}
	
	var a3 = document.getElementById("q3")
	
	if(a3.value == "4"){
		alert("Du har rett svar på nr 3")
		poeng = poeng + 1;
  }
	var a4 = document.getElementById("q4")
	
	if(a4.value == "16"){
		alert("Du har rett svar nr 4")
		poeng = poeng + 1;
  }
	var a5 = document.getElementById("q5")
	
	if(a5.checked){
		alert("Du har rett svar på nr 5")
		poeng = poeng + 1;
  }
	var a6 = document.getElementById("q6")
	
	if(a6.checked){
		alert("Du har rett svar på nr 6")
		poeng = poeng + 1;
  }
	var a7 = document.getElementById("q7")
	
	if(a7.value == "italia"){
		alert("Du har rett svar på nr 7")
		poeng = poeng + 1;
  }
	var a8 = document.getElementById("q8")
	
	if(a8.checked){
		alert("Du har rett svar på nr 8")
		poeng = poeng + 1;
  }
	var a9 = document.getElementById("q9")
	
	if(a9.value == "1"){
		alert("Du har rett svar på nr 9")
		poeng = poeng + 1;
  }
	var a10 = document.getElementById("q10")
	
	if(a10.value == "8.mai 1945"){
		alert("Du har rett svar på nr 10")
		poeng = poeng + 1;
	}
	alert("Poenga dine er:"+poeng)
  }