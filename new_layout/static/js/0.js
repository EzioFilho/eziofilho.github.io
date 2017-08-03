var signos = [
  'Aquário',       // 0
  'Peixes',        // 1
  'Áries',         // 2
  'Touro',         // 3
  'Gêmeos',        // 4
  'Câncer',        // 5
  'Leão',          // 6
  'Virgem',        // 7
  'Libra',         // 8
  'Escorpião',     // 9
  'Sagitário',     // 10
  'Capricórnio'    // 11
]

function resultado (){
  show_hide_buttons();
  var pos = Math.floor(Math.random() * 11);
  var res = signos[pos];
  document.getElementById("load").innerHTML = "<b>O sígno que combina com você é " + res + "!</b>";
  ImageResult(res, pos);
}

function ImageResult(res, pos){
	document.getElementById("myCanvas").style.visibility = "";
	document.getElementById("myCanvas").style.display = "inline";

	 var canvas = document.getElementById("myCanvas");
	 var context = canvas.getContext("2d");
	 var imageObj = new Image();
	 imageObj.onload = function(){
     context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height,
                                 0, 0, canvas.width, canvas.height);
		//  context.font = "40pt Calibri";
		//  context.fillText("" + res + "", 120, 220);
	 };
   imageObj.src = './img/0/' + pos + '.png'
   getResult(pos, '0');
}
