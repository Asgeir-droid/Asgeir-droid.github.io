// JavaScript Document
function handleliste(){
	let tekst = [];
	let tall;
	let nummerPaavare;
	let navnPaaVare;

	nummerPaavare = parseInt(prompt("Kor mange varer skal du skrive inn?"));

	if (nummerPaavare > 0){
		for (tall = 0; tall < nummerPaavare; tall++){
			navnPaaVare = prompt("Navn på vare " + (tall + 1));
			tekst.push(navnPaaVare);
		}

			//document.getElementById(handlelsite).innerHTML = tekst[tall];
			console.log(tekst[tall]);
			let node = document.createElement("li");
			let tekstnode = document.createTextNode(tekst);
			node.appendChild(tekstnode);
			document.getElementById("handlelsite").appendChild(node);
		}
		tekst.sort();
		console.log(tekst);

		tekst.reverse();
		console.log(tekst);

	 document.getElementById("info").style.color = "black";
}
