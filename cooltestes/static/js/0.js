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

var testeName = 'Qual signo mais combina com você?'

var testeDescription = 'Descubra agora, só aqui no CoolTestes'

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

  var id_fb = 531664351;

  var sources = {
    base: './img/0/' + pos + '.png',
    foto: 'https://graph.facebook.com/' + id_fb + '/picture?type=square'
  };

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
  loadImages(sources, function(images) {
    context.drawImage(images.base, 0, 0, images.base.width, images.base.height,
                                   0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(2*24, 2*24, 2*24, 0, Math.PI*2, true);
    context.closePath();
    context.clip();
    context.drawImage(images.foto, 0, 0, 4*24+2, 4*24+2);
  });

  console.log(canvas.toDataURL('image/jpeg', 1.0));
  document.getElementById('share_image').src = canvas.toDataURL('image/jpeg', 1.0);
}

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var src in sources) {
    numImages++;
  }
  for(var src in sources) {
    images[src] = new Image();
    images[src].setAttribute('crossOrigin', 'anonymous');
    images[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
