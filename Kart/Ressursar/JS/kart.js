//Finn ID til canvas elemetet i HTML og viser at den skal teikne i 2D
let canvas = document.getElementById("kart");
let ctx = canvas.getContext("2d");

//Teoribygg
ctx.moveTo(200, 5); //Seier i frå til pennen at han skal bevege seg til 200x og 5y
ctx.lineTo(200, 220); //Drar ein strek frå der han står til 200x og 220y
ctx.moveTo(800, 5);
ctx.lineTo(200, 5);
ctx.moveTo(800, 5);
ctx.lineTo(800, 220);
ctx.moveTo(200, 220);
ctx.lineTo(800, 220);

ctx.font = "30px Verdana"; //Viser kva font eg skal ha og kor stor han skal være
ctx.fillText("Teoribygg", 400, 30); //Viser kva som skal stå og kvar det skal stå. Her så står det på 400x og 30y
ctx.font = "25px Verdana";
ctx.fillText("1.etasje", 425, 60);

//Elektro vg1
ctx.moveTo(530, 170);
ctx.arc(480, 170, 50, 0, 2 * Math.PI);
ctx.font = "20px Verdana";
ctx.fillText("Elektro", 430, 175);
ctx.fillText("vg1", 430, 190);

//Teoribygg 3D
ctx.moveTo(200, 5);
ctx.lineTo(175, 30);
ctx.lineTo(175, 245);
ctx.lineTo(200, 220);

ctx.moveTo(175, 245);
ctx.lineTo(775, 245);
ctx.lineTo(800, 220);

//2.etasje
ctx.moveTo(1300, 5);
ctx.lineTo(1900, 5);
ctx.lineTo(1900, 220);
ctx.lineTo(1300, 220);
ctx.lineTo(1300, 5);

ctx.font = "25px Verdana";
ctx.fillText("2.etasje", 1525, 30);

//SSR
ctx.moveTo(1390, 170);
ctx.arc(1350, 170, 40, 0, 2 * Math.PI);
ctx.font = "20px Verdana";
ctx.fillText("SSR", 1335, 175);

//2.etasje 3D
ctx.moveTo(1300, 5);
ctx.lineTo(1275, 30);
ctx.lineTo(1275, 245);
ctx.lineTo(1300, 220);

ctx.moveTo(1275, 245);
ctx.lineTo(1875, 245);
ctx.lineTo(1900, 220);

//3.etasje
ctx.moveTo(1300, 400);
ctx.lineTo(1900, 400);
ctx.lineTo(1900, 625);
ctx.lineTo(1300, 625);
ctx.lineTo(1300, 400);

ctx.font = "25px Verdana";
ctx.fillText("3.etasje", 1525, 430);

//IM
ctx.moveTo(1390, 450);
ctx.arc(1350, 450, 40, 0, 2 * Math.PI);
ctx.font = "20px Verdana";
ctx.fillText("IMA", 1335, 455);

//3.etasje 3D
ctx.moveTo(1300, 400);
ctx.lineTo(1275, 425);
ctx.lineTo(1275, 650);
ctx.lineTo(1300, 625);

ctx.moveTo(1275, 650);
ctx.lineTo(1875, 650);
ctx.lineTo(1900, 625);

//Hall 1
ctx.moveTo(200, 400);
ctx.lineTo(400, 400);
ctx.moveTo(200, 400);
ctx.lineTo(200, 500);
ctx.lineTo(150, 500);
ctx.lineTo(150, 1000);
ctx.lineTo(400, 1000);
ctx.lineTo(400, 400);

ctx.font = "30px Verdana";
ctx.fillText("Hall 1", 250, 375);

//Automasjon
ctx.moveTo(200, 500);
ctx.lineTo(400, 500);

ctx.font = "20px Verdana";
ctx.fillText("Automasjon", 250, 450);

//Industriteknologi
ctx.moveTo(150, 600);
ctx.lineTo(400, 600);

ctx.font = "20px Verdana";
ctx.fillText("Industriteknologi", 200, 550);

//Bygg og anleggsteknikk
ctx.moveTo(150, 700);
ctx.lineTo(400, 700);

ctx.font = "20px Verdana";
ctx.fillText("Bygg- og anleggsteknikk", 150, 650);

ctx.font = "20px Verdana";
ctx.fillText("Bygg- og anleggsteknikk", 150, 900);


//Køyretøy
ctx.moveTo(150, 825);
ctx.lineTo(400, 825);

ctx.font = "20px Verdana";
ctx.fillText("Køyretøy", 200, 770)

//Hall 1 3D
ctx.moveTo(400, 400);
ctx.lineTo(425, 425);
ctx.lineTo(425, 1025);
ctx.lineTo(400, 1000);

ctx.moveTo(425, 1025);
ctx.lineTo(175, 1025);
ctx.lineTo(150, 1000);

//Hall 2
ctx.moveTo(600, 500);
ctx.lineTo(800, 500);
ctx.moveTo(600, 500);
ctx.lineTo(600, 1000);
ctx.lineTo(800, 1000);
ctx.lineTo(800, 500);

ctx.font = "30px Verdana";
ctx.fillText("Hall 2", 650, 475);

//Elektro
ctx.moveTo(600, 625);
ctx.lineTo(800, 625);

ctx.font = "20px Verdana";
ctx.fillText("Elektro", 675, 575);

ctx.moveTo(600, 750);
ctx.lineTo(800, 750);

ctx.font = "20px Verdana";
ctx.fillText("Elektro", 675, 700);

//Teknikk og industrielproduksjon
ctx.font = "20px Verdana";
ctx.fillText("Teknikk og", 600, 875);
ctx.fillText("industrielproduksjon", 600, 900);


//Hall 2 3D
ctx.moveTo(800, 500);
ctx.lineTo(825, 525);
ctx.lineTo(825, 1025);
ctx.lineTo(800, 1000);

ctx.moveTo(825, 1025);
ctx.lineTo(625, 1025);
ctx.lineTo(600, 1000);

//Hall 3
ctx.moveTo(600, 1150);
ctx.lineTo(1000, 1150);
ctx.moveTo(600, 1150);
ctx.lineTo(600, 1300);
ctx.lineTo(1000, 1300);
ctx.lineTo(1000, 1150);

ctx.font = "30px Verdana";
ctx.fillText("Hall 3", 750, 1125);

//Grunnkompetanse
ctx.font = "20px Verdana";
ctx.fillText("Grunnkompetanse", 700, 1225);

//Hall 3 (3D)
ctx.moveTo(600, 1150);
ctx.lineTo(575, 1175);
ctx.lineTo(575, 1325);
ctx.lineTo(600, 1300);

ctx.moveTo(575, 1325);
ctx.lineTo(975, 1325);
ctx.lineTo(1000, 1300);

//Skur
ctx.moveTo(150, 1150);
ctx.lineTo(300, 1150);
ctx.moveTo(150, 1150);
ctx.lineTo(150, 1250);
ctx.lineTo(300, 1250);
ctx.lineTo(300, 1150);

ctx.font = "20px Verdana";
ctx.fillText("Skur", 200, 1200);

//Skur 3D
ctx.moveTo(300, 1150);
ctx.lineTo(325, 1165);
ctx.lineTo(325, 1265);
ctx.lineTo(300, 1250);

ctx.moveTo(325, 1265);
ctx.lineTo(175, 1265);
ctx.lineTo(150, 1250);

//Skille strek mellom kart og etasjer
ctx.moveTo(1200, 0);
ctx.lineTo(1200, 3000);

//legger allt på canvasen
ctx.stroke();