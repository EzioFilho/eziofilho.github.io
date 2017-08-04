function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

function ShareTest(teste_id) {
  var imagem = convertCanvasToImage(document.getElementById("myCanvas"));
  console.log(imagem);

  FB.ui(
   {
     method: 'share_open_graph',
	   action_type: 'og.likes',
	   action_properties: JSON.stringify({
     object:{
  		 'og:url': 'http://localhost/cooltestes/' + teste_id + '.html',
  		 'og:title': 'Teste',
       'og:description': 'here custom description',
  		 'og:image': imagem
	   }

	})
   }, function(response){

    console.log(response);

   });
 }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '334298370360424',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
