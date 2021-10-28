// JavaScript Document

function displayRandomImages() 
{
 
   var imageArray = [
   { 
     src: "ressources/IMAGES/bulldog-1047518__340.webp",

     width: "320",
     height: "195"
   }, 
   {
     src: "ressources/IMAGES/dog-4465690__340.webp",
     width: "320",
     height: "195"
   }, 
   {
     src: "ressources/IMAGES/friends-1149841__340.webp",
     width: "320",
     height: "195"
   },
   {
     src: "ressources/IMAGES/pug-801826_960_720.webp",
     width: "320",
     height: "195"
    } ];
    
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }
   
  function getRandomNum(min, max) 
  {
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
  }  

  var newImage = getRandomNum(0, newArray.length - 1);
 
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }
  document.body.appendChild(newImage);
}
