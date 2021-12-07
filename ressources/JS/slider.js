// JavaScript Document

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var img = document.getElementById("Bilde");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
	img.style.opacity = this.value/100;
}