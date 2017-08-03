function init_load(){
  document.getElementById("imagem").style.visibility = 'hidden';
  document.getElementById("load").innerHTML = "<b>Iniciando seu teste...</b>";

  document.getElementById("porquinho").style.visibility = "";
  document.getElementById("porquinho").style.display = "inline";
  setTimeout(load2, 2000);
}
function load2(){
  document.getElementById("porquinho").src = "./img/loads/load2.png";
  document.getElementById("load").innerHTML = "<b>Conectando com Facebook...</b>";
  setTimeout(load3, 1800);
}
function load3(){
  document.getElementById("porquinho").src = "./img/loads/load3.png";
  document.getElementById("load").innerHTML = "<b>Coletando dados importantes...</b>";
  setTimeout(load4, 1600);
}
function load4(){
  document.getElementById("porquinho").src = "./img/loads/load4.png";
  document.getElementById("load").innerHTML = "<b>Analisando seu Perfil...</b>";
  setTimeout(load5, 1400);
}
function load5(){
  document.getElementById("porquinho").src = "./img/loads/load5.png";
  document.getElementById("load").innerHTML = "<b>Gerando seu Resultado...</b>";
  setTimeout(resultado, 1200);
}

function show_hide_buttons(){
  document.getElementById("porquinho").style.display = "none";
  document.getElementById("porquinho").style.visibility = "hidden";

  document.getElementById('botao_compartilhar').style.visibility = '';
  document.getElementById('botao_compartilhar').style.display = 'inline';

  document.getElementById('botao_refazer_teste').style.display = 'inline';
  document.getElementById('botao_refazer_teste').style.visibility = '';

  document.getElementById('botao_iniciar_teste').style.display = 'none';
  document.getElementById('botao_iniciar_teste').style.visibility = 'hidden';
}
